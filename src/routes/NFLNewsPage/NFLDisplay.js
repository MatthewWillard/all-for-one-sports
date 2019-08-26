import React, { Component } from 'react';
import axios from 'axios';
import '../../Display.css'

class NFLDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ url: `https://newsapi.org/v2/top-headlines?sources=nfl-news&apiKey=${process.env.REACT_APP_API_KEY}` });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    const time = new Date(date);
    const year = time.getFullYear();
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const composedTime = month + '/' + day + '/' + year
    return composedTime;
  }

  getArticles(url) {
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get(`https://newsapi.org/v2/top-headlines?sources=nfl-news&apiKey=${apiKey}`)
      .then(res => {
        const articles = res.data.articles;
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NFLDisplay;