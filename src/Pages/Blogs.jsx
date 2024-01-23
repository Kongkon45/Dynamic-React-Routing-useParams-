import React,{useState} from 'react'
import { blogData } from '../Data'
import { Link } from 'react-router-dom'

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogData)
    const truncateString = (str, num)=>{
        if(str.length > num){
            return str.slice(0,num)+"...";
        }
        else{
            return str;
        }
    }
  return (
    <div>
        <h1>Blogs Pages</h1>
        <section>
            {
                blogs.map((blog)=>{
                    const {id, title, body} = blog;
                    return <article key={id}>
                        <h1>{title}</h1>
                        <p>{truncateString(body, 100)}</p>
                        <Link to={title} className='link'>Learn More</Link>
                    </article>
                })
            }
        </section>
    </div>
  )
}

export default Blogs