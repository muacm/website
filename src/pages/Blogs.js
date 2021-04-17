import React from "react";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/new.css";
const Blogs = () => {
  return (
    <div id="contact">
      <div className="container pt-5">
        <h1 className="pt-5 text-center">Blogs</h1>
        <br />
        <div className="bgrid">
          <Blog
            title="5 Shortcut Commands on Windows that can increase your productivity!"
            src="demo_character.jpg"
          ></Blog>
          <Blog
            title="Introducing Medi-Caps University ACM Chapter"
            src="demo_character.jpg"
          ></Blog>
        </div>
        <br />
      </div>
      <hr />
    </div>
  );
};

export default Blogs;
