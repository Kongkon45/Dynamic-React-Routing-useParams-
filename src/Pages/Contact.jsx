import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const Navigate = useNavigate();
  return (
    <div>
        <h1>Contact pages</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti expedita illum molestiae praesentium aliquam voluptatem autem dolor soluta nobis reiciendis laudantium, exercitationem qui. Natus obcaecati recusandae iusto quam quibusdam asperiores!</p>
        <button onClick={()=>Navigate('/')}>go to home page</button>
    </div>
  )
}

export default Contact