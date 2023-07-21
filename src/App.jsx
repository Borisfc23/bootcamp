import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound404 from "./components/Utils/NotFound404";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ArticleDetails from "./components/Blog/ArticleDetails";
import Courses from "./pages/Courses";
import Connected from "./pages/Connected";
import DetailsCourse from "./components/Courses/DetailsCourse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<ArticleDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<DetailsCourse />} />
          <Route path="/connected" element={<Connected />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
