import axios from 'axios'
import React, {useEffect, useState} from 'react'

const FetchData = () => {
    const [post, setPost] = useState([])
    const [limit, setLimit] = useState(20)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=> setPost(response.data.slice(0,limit))
            // console.log(response.data)
            )
        .catch(error=>console.log(error))
    },[limit])

  return (
    <div>
        {
        post.map((p,i)=>{
           return <h4 key={i} className='ms-3'>{p.id}: {p.title}</h4>
        })
        }
    {   
    limit < 100 && <a className='btn btn-success' onClick={()=>setLimit(limit+20)}>Show more</a>
    }
     {   
    limit > 0 && <a className='btn btn-danger' onClick={()=>setLimit(limit-20)}>Show less</a>
    }


    </div>
  )
}

export default FetchData