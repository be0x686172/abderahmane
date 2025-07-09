import { BrowserRouter, Routes, Route } from "react-router";

import Sidebar from "../components/sidebar/Sidebar";
import Circle from "../components/circle/Circle";
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Blog from '../pages/blog/Blog';
import Cv from '../pages/cv/Cv';

const Routing = () => {
    return (
        <BrowserRouter>
            <Circle style={{ top: '100px', left: '200px' }} />
            <Sidebar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cv" element={<Cv />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;