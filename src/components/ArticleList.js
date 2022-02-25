import React from 'react'
import Article from "./Article"

function ArticleList({ posts }) {
    const articleArray =  posts.map(post => <Article post={post}/>)
  return (
    
    <main>
        {articleArray}
    </main>
  )
}

export default ArticleList