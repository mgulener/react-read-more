import React, { useState, useEffect } from 'react'
import BlogItem from './BlogItem';

export default function Blog() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=62cb43128bf34a019ea46fc9a9e42289')
      .then(response => response.json())
      .then((result) => {
        setIsLoaded(true);
        setNews(result.articles);
      }, (error) => {
        setIsLoaded(true);
        setError(error);
      })
  }, [])

  if (error) {
    return <div className="alert alert-danger">Error : {error.message}</div>
  } else if (!isLoaded) {
    return <div className="alert alert-info">Loading ...</div>
  } else {
    return (
      news.map((item,index) => (
        <BlogItem 
          key = {index} 
          index = {index}
          author = {item.author} 
          description = {item.description} 
          image = {item.urlToImage} 
        />
      ))
    )
  }
}