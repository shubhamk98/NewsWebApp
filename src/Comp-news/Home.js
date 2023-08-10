import React from "react";
import DummyData from "../DummyData.json";
import NewsCard from "./NewsCard";
import "./Home.css";

function Home() {
  return (
    <div>
      <h2 className="subheading">Latest News</h2>
      <div className="card-container">
        {DummyData.map((newsItem) => (
          <NewsCard
            key={newsItem.id}
            imageSrc={newsItem.image}
            title={newsItem.title}
            description={newsItem.description}
            url={newsItem.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
