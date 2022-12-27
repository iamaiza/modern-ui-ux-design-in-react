import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container_article d-flex'>
      <div className='gpt3__blog-container_article-img'>
        <img src={imgUrl} alt='blogImg'  />
      </div>
      <div className='gpt3__blog-container_article-content d-flex'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}
export default Article