import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=979f1e008c4d45ef8377f020074d12dd";
    let data = await fetch(url); 
    let formatedData = await data.json();
    this.setState({articles:formatedData.articles});
  }

  render() {
    return (
      <div className="container my-3 w-100">
        <h1 className="text-dark text-center">Trending  News</h1>
        <div className="container d-flex justify-content-center align-items-center flex-wrap gap-4">
          {this.state.articles.map((element) => {
            return <NewsItem key={element.url}
              title={element.title.slice(0,45)}
              description={element.content !== null?element.content.slice(0,88):element.content}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default News;
