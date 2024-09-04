import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, time, author, source } = props;
  return (
    <div>
      <div className="card mb-4">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
            transform: "translate(-2%, -50%)",
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden"></span>
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://thefulcrum.us/media-library/local-news.jpg?id=50707556&width=4901&height=3259&quality=85&coordinates=0%2C0%2C0%2C0"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />

        <p
          style={{ marginLeft: "15px", marginTop: "7px", marginBottom: "0px" }}
        >
          <small className="text-body-secondary">
            {!author ? "Unknown" : author} | {new Date(time).toGMTString()}
          </small>
        </p>

        <div className="card-body">
          <h5 className="card-title">{title}... </h5>

          <p className="card-text">{description}...</p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
