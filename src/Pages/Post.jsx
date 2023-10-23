import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [errorSms, setErrorSms] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date().getUTCMilliseconds();
    console.log(today);

    try {
      if (!title) {
        throw new Error("Title cannot be empty");
      }

      if (!content) {
        throw new Error("Content cannot be empty");
      }

      if (!img) {
        throw new Error("Image cannot be empty");
      }

      const data = localStorage.getItem("blog");

      if (!data) {
        localStorage.setItem(
          "blog",
          JSON.stringify([{ id: today, title, content, img }])
        );
        // navigate("/view-posts")
      } else {
        const pre = JSON.parse(data);
        localStorage.setItem(
          "blog",
          JSON.stringify([...pre, { id: today, title, content, img }])
        );
      }

      setTitle("");
      setContent("");
      setImg("");
    } catch (error) {
      setErrorSms(error.message);
    }

    // navigate("/signin");
  };

  return (
    <div className="mx-5 ">
      <Link to={"/view-posts"}>View-posts</Link>

      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-5">Create Post</h1>
        {errorSms && <p className=" absolute right-3">{errorSms}</p>}
        <form onSubmit={handleSubmit} className=" space-y-3">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            placeholder="Enter title"
            className="bg-slate-300 max-w-xs w-96 py-2 px-3 outline-none rounded-md"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <label htmlFor="content">Content:</label>
          <br />
          <input
            type="text"
            placeholder="Enter content"
            className="bg-slate-300 max-w-xs w-96 py-2 px-3 outline-none rounded-md"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <br />
          <label htmlFor="Image">Image Url:</label>
          <br />
          <input
            type="text"
            placeholder="Enter Image Url"
            className="bg-slate-300 max-w-xs w-96 py-2 px-3 outline-none rounded-md"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
          <br />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-slate-500 mt-3 py-2 px-5 text-white font-semibold rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
