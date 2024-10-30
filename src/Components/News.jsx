import React, { useEffect, useState } from 'react'
import NewsDetails from './NewsDetails'
import  API_KEY  from '../data'; // Named import


const News = () => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    },[]);

  return (
    <div className='news-grid'>
        {articles.map((news, index)=> {
            return <NewsDetails 
            key={index} 
            author={news.author}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            />
        })}
    </div>
  )
}

export default News