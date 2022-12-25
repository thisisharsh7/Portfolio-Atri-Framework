import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import BookCall from "./pages/BookCall.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Projects" element={<Projects />} />
<Route path="/Blog" element={<Blog />} />
<Route path="/BookCall" element={<BookCall />} />
<Route path="/Services" element={<Services />} />
    </Routes>
  );
}
