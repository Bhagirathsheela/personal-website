import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../consts";
import ReactMarkdown from "react-markdown";


const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  // 🔥 Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!post) return <h2 style={{ paddingTop: "120px" }}>Post not found</h2>;

  return (
    <div className="blog-post-page">
  <div className="blog-post-container">

    <Link to="/blog" className="blog-back-btn">
      ← Back to Blogs
    </Link>

    <h1 className="blog-post-title">{post.title}</h1>
    <div className="blog-post-content"><ReactMarkdown>{post.content}</ReactMarkdown></div>
  </div>
</div>

  );
};

export default BlogPost;
