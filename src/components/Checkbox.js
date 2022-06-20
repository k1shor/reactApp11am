import React, { useEffect, useState } from 'react'
import { viewCategories } from './api/categoryApi'

const Checkbox = ({ handleFilters }) => {
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([])
    // string - ''
    // array - []
    // object - {}
    // number - 0

    const handleToggle = (e) => {
        const newChecked = [ ...checked ]
        const categoryId = checked.indexOf(e)
        // returs 1 if not checked, returns index if checked
        if (categoryId === -1) {
            newChecked.push(e)
        }
        else {
            newChecked.splice(categoryId, 1)
        }
        setChecked(newChecked)
        handleFilters(newChecked, 'category')
        // console.log(newChecked)
    }

    useEffect(() => {
        viewCategories()
            .then(data => {
                if (data.errror) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [])

    return (
        <>
            {
                categories.map((category, i) => {
                    return <div className="form-check" key={i}>
                        <input className="form-check-input mt-1 me-2" type="checkbox" value={category._id} id={category._id} onChange={()=>handleToggle(category._id)} />
                        <label className="form-check-label" htmlFor={category._id}>
                            {category.category_name}
                        </label>
                    </div>
                })
            }


        </>
    )
}

export default Checkbox