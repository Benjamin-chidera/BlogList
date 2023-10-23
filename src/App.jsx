import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Post } from "./Pages/Post";
import { View } from "./Pages/View";
import { SignUp } from "./Pages/SignUp";

function App() {
  return (
    <div>
      <h1 className=" text-center mt-3 text-3xl font-bold">My Blog Post</h1>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Post />}></Route>
            <Route path="/view-posts" element={<View />}></Route>
            <Route path="/signin" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
