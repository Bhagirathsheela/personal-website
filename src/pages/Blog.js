import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../consts";

const Blog = () => {
  return (
    <div className="blog-container">
  <h2>Blogs</h2>

  {posts.map((post) => (
    <div key={post.slug} className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>

      <Link to={`/blog/${post.slug}`} className="read-btn">
        Read More
      </Link>
    </div>
  ))}
</div>

  );
};

export default Blog;
