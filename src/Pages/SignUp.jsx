import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!email || !password || !name || !setName) {
        throw new Error("Please fill the form correctly");
      }

      localStorage.setItem("user", JSON.stringify({ email, password, name }));
      navigate("/view-posts");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("user")

    if (data) {
      navigate("/")
    }
  })

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-5">Sign in</h1>
      <form onSubmit={handleSubmit} className=" space-y-3">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter title"
          className="bg-slate-300 max-w-xs w-96 py-2 px-3 outline-none rounded-md"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="Email">Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          className="bg-slate-300 max-w-xs w-96 py-2 px-3 outline-none rounded-md"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="Password">Password:</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          className="bg-slate-300 max-w-xs w-96 py-2 px-3 outline-none rounded-md"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <br />
        <button
          type="submit"
          className="bg-slate-500 mt-3 py-2 px-5 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
