import React, { Component } from 'react';
import Newsitem from './Newsitem';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      error: null,
    };
    document.title = `${this.props.category} News`;
  }

  async componentDidMount() {
    await this.fetchNews();
  }

  async fetchNews() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ad7b926c64804024b0838948d0f8ac26&page=${this.state.page}&pageSize=15`;
      let response = await fetch(url);
      let data = await response.json();
      this.setState({
        articles: data.articles,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({
        loading: false,
        error: "Failed to fetch news. Please try again later.",
      });
    }
  }

  handlePrev = async () => {
    if (this.state.page > 1) {
      await this.fetchNewsWithPage(this.state.page - 1);
    }
  };

  handleNext = async () => {
    await this.fetchNewsWithPage(this.state.page + 1);
  };

  async fetchNewsWithPage(page) {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ad7b926c64804024b0838948d0f8ac26&page=${page}&pageSize=15`;
      let response = await fetch(url);
      let data = await response.json();
      this.setState({
        page,
        articles: data.articles,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({
        loading: false,
        error: "Failed to fetch news. Please try again later.",
      });
    }
  }

  render() {
    const { articles, loading, error } = this.state;

    return (
      <div className="container" style={{padding:"10vh", backgroundColor:"#EEEEEE"}}>
        <h1 className="text-centre" style={{textAlign:'center',fontFamily:"sans-serif",margin:"4vh 0"}}>{`${this.props.category} News`}</h1>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="row">
          {articles.map((element) => (
            <div key={element.url} className="col-md-4">
              <Newsitem
                title={element ? (element.title ? element.title : "Click to see the news") : "Click to see the news"}
                description={element ? (element.description ? element.description : "Unknown description") : "Unknown description"}
                URL={element.urlToImage ? element.urlToImage : "https://cdn.vox-cdn.com/thumbor/nZCsUIZ3FFwcQWzU-kp4Yow9UKM=/0x403:2017x1459/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25155615/1595767282.jpg"}
                sourceurl={element.url}
              />
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1 || loading}
            className="btn btn-primary"
            onClick={this.handlePrev}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNext}
            disabled={loading}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
