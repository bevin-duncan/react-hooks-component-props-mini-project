import React from 'react'

function About({ blogObj }) {
    const {about, image="https://via.placeholder.com/215"} = blogObj
  return (
    <aside>
        <img src={image} alt="blog logo"/>
        <p>{about}</p>
    </aside>
   
  )
}

export default About
