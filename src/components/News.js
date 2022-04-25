import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Title from "./Title";
import PropTypes from "prop-types";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      articales: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=b3c616a339df4825bf748b4074fa4261&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articales: [...this.state.articales, ...parseData["articles"]],
      loading: false,
    });
  }

  async fetchMoreData() {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.catagory
    }&apiKey=b3c616a339df4825bf748b4074fa4261&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articales: [...this.state.articales, ...parseData["articles"]],
      loading: false,
    });
  }
  render() {
    return (
      <div className="container">
        <Title title="Top Headlines" />
        <InfiniteScroll
          dataLength={this.state.articales.length}
          next={this.fetchMoreData.bind(this)} //To put endMessage and loader to the top.
          loader={this.state.loading && <h4>Loading...</h4>}
          hasMore={true}
          children={this.state.articales}
        >
          <div className="row">
            {this.state.articales &&
              this.state.articales.map((artical, index) => {
                return (
                  <div className="col-md-4 my-3" key={index}>
                    <NewsItem
                      title={artical?.title}
                      desc={artical?.description}
                      imageUrl={artical?.urlToImage}
                      writer={artical?.author}
                      newsUrl={artical?.url}
                      date={artical?.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

News.propTypes = {
  catagory: PropTypes.string,
};

News.defaultProps = {
  catagory: "sports",
};
