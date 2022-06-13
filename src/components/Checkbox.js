import React, { useEffect, useState } from 'react'
import { viewCategories } from './api/categoryApi'

const Checkbox = () => {
    const [categories, setCategories] = useState([])
    // string - ''
    // array - []
    // object - {}
    // number - 0

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
                        <input className="form-check-input" type="checkbox" value="" id={category._id} />
                        <label className="form-check-label" for={category._id}>
                            {category.category_name}
                        </label>
                    </div>
                })
            }


        </>
    )
}

export default Checkbox