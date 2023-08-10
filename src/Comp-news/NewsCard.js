import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsCard.css";

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7c7c93790a7448f18d1e28fa5dd50aad"
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="news-container">
      {newsData.map((article, index) => (
        <div className="card" key={index}>
          <img
            className="card-image"
            src={
              article.urlToImage
                ? article.urlToImage
                : "https://th.bing.com/th/id/OIP.WjclrJpU3aL9rz89xe7RzQHaEO?pid=ImgDet&rs=1"
            }
            alt={article.title ? article.title : ""}
          />
          <div className="card-content">
            <h2 className="card-title">{article.title ? article.title : ""}</h2>
            <p className="card-description">
              {article.description ? article.description : ""}
            </p>
            <button className="read-more-button">
              <a className="anchorlink" href={article.url ? article.url : ""}>
                Read More
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
