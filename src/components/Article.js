import React from 'react'

function Article({post}) {
    const {title, date = "January 1, 1970", preview, minutes} = post
    console.log({minutes})

  return (
    <article>
        <h3>{title}</h3>
        <small>{date} 🔸 {minutes} min read </small>
       
        
        <p>{preview}</p>
    </article>
  )
}

export default Article

