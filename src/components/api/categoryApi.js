import { API } from "../../config"

export const addCategory = (token, category_name) =>{
    return fetch(`${API}/postcategory`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
} 

export const viewCategories = () => {
    return fetch(`${API}/categories`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const categoryDetails = (category_id) => {
    return fetch(`${API}/findcategory/${category_id}`,{
        method: "GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

