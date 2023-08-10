import React from "react";
import NewsCard from "./NewsCard";
import "./Home.css";

function Home() {
  return (
    <div>
      <h2 className="subheading">Latest News</h2>
      <NewsCard />
    </div>
  );
}

export default Home;
