import { API } from "../../config"

export const addProduct = (product, token) => {
    // console.log(product)
    return fetch(`${API}/addproduct`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            // "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body:product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const findProducts = (sortBy, order, limit) => {
    return fetch(`${API}/productlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}