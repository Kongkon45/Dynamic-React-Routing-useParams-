import React,{useState, useEffect} from 'react'
import{useParams} from 'react-router-dom'
import { blogData } from '../Data'

const Blog = () => {
    const {title} = useParams()
    const [bodyData, setBodyData] = useState("");
    useEffect(()=>{
        const data = blogData.filter((blog)=>blog.title==title);
        setBodyData(data[0].body)
    })
  return (
    <div>
        <h1>{title}</h1>
        <p className='para'>{bodyData.slice(0,300)}</p>
        <p className='para'>{bodyData.slice(301,900)}</p>
    </div>
  )
}

export default Blog