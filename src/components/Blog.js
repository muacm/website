import React from "react";

const Blog = ({ title, src }) => {
  return (
    <div>
      <div
        class="card text-white bcard"
        onclick="window.open('https://muacm-supreme.medium.com/introducing-medi-caps-university-acm-chapter-e41cff5ddedc?source=rss-dc15405cc00')"
      >
        <div class="row">
          <div class="col-12 col-md-6">
            <img src={src} class="card-img" alt="..."></img>
          </div>
          <div class="col-12 col-md-6 text-white bcard">
            <div class="card-body pt-3 pt-md-0">
              <h6 class="card-title text-white">{title}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
