import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, writer, newsUrl, date } = this.props;

    return (
      <div>
        <div className="card">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{
              height: "10rem",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title && title.length > 20 ? title.slice(0, 20) + "..." : title}
            </h5>
            <p className="text-muted text-truncate">{writer}</p>
            <p className="text-muted text-truncate">{date}</p>
            <p className="card-text lh-3">
              {desc && desc.length > 140 ? desc.slice(0, 140) + "..." : desc}
            </p>
            <a
              href={newsUrl}
              className="btn btn-primary btn-sm"
              target="_blank"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
