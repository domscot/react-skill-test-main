import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      });
  }, [id]);

  function moreDetail() {
    window.alert("Extra information: " + post.body);
    window.history.replaceState(
      null,
      `${post.title}`,
      `http://localhost:3000/DataDisplay/Detail/${post.id}`
    );
  }

  return (
    <div class="flex flex-col items-center m-50">
      <p>Please enter a number between 1 and 100.</p>
      <br></br>
      <input
        class="bg-slate-600 text-white text-center p-5"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <p>
        You have chosen option:{" "}
        <a onClick={moreDetail} class="font-bold text-lg">
          {post.id}
        </a>
        ! Click the number find out more!
      </p>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
