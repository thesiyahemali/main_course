import React, { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data)=>{
         setComments(data)   
      })
    
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} style={{ marginBottom: "20px" }}>
            <p><strong>Post ID:</strong> {comment.postId}</p>
            <p><strong>ID:</strong> {comment.id}</p>
            <p><strong>Name:</strong> {comment.name}</p>
            <p><strong>Email:</strong> {comment.email}</p>
            <p><strong>Body:</strong> {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;


