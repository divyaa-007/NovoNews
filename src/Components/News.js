import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
 
  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    const showCategoryInTitle = props.category !== "general";
    document.title = showCategoryInTitle
      ? `${props.category.charAt(0).toUpperCase()}${props.category.slice(
          1
        )}-NovoNews:Get your daily dose of news for free`
      : "NovoNews - Get your daily dose of news for free";

    updateNews();
    // eslint-disable-next-line
  }, []);

  //const handlePrevClick = async ()=>{
  //  setPage(page-1);
  //  updateNews();
  // }

  //const handleNextClick = async ()=>{
  //  setPage(page+1);
  //  updateNews();
  // }

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        style={{ marginTop: "75px", marginBottom: "35px" }}
        className="text-center"
      >
        {props.category !== "general"
          ? `NovoNews - Top ${props.category
              .charAt(0)
              .toUpperCase()}${props.category.slice(1)} Headlines `
          : "NovoNews - Top Headlines"}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        style={{ paddingTop: "10px" }}
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        // loader={<Spinner />}

      >
        <div className="container">
          <div className="row">
            {/* {!state.loading && state.articles && state.articles.map((element) => { */}

            {articles &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      time={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={() => setPage(page - 1)} disabled={page <= 1}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={() => setPage(page + 1)} disabled={page + 1 > Math.ceil(totalResults / 20)}>Next &rarr;</button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "General",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
