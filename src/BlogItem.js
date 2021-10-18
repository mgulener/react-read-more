import React, { useState } from 'react'

export default function BlogItem(props) {
  const { author, image, description, index } = props;
  const [openIndex, setOpenIndex] = useState(null)
  const isShow = openIndex === index;
  const visibleText = isShow ? description : description.substring(0,100) + '...';

  return (
    <div className="blog-list-item">
      <div className="blog-list-item-image">
        <img src={image} />
      </div>
      <div className="blog-list-item-content">
        <div className="blog-list-item-author">
          {author}
        </div>
        <div className="blog-list-item-description">
          <p>
            {visibleText}
          </p>
          { !isShow && (
            <button 
              className = "btn btn-outline-info"
              onClick = {() => setOpenIndex(index)}
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
