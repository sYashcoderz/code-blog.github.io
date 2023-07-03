import "./App.css";
import { useEffect, useState, createContext  } from 'react';
import Demo from "./components/Demo";
import Blog from "./components/Blog/Blog";
import Read from "./components/readBlog/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchAllData } from "../src/Services/blog.service";

export const BlogContext = createContext();

function App() {
  const [allBLog, setAllBlog] = useState()
  const [singleBlog, setSingleBlog] = useState([])
  const [addFav, setAddFav] = useState([])
  
  const fetchData = async () => {
    const response = await fetchAllData()
    setAllBlog(response)
  }

  // Store the Fav. blog id in LocalStorage
  localStorage.setItem('FavBlog', addFav);

  useEffect(() => {
      fetchData()
  },[])

  return (
    <>
      {/* <Demo /> */}
      <BrowserRouter>
        <BlogContext.Provider value={{ allBLog, setSingleBlog, singleBlog, setAddFav, addFav }} >
          <Routes>
            <Route path="/" element={<Demo />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/full-blog/:id" element={<Read />} />
          </Routes>
        </BlogContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
