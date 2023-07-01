import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Sidebar  className="fixed"/>
          <Routes>
            {/* Home */}
            <Route path="/portfolio/" element={<Home />} />
            {/* Create Post */}
            <Route path="/portfolio/about" element={<About />} />
            {/* Profile */}
            <Route path="/portfolio/skills" element={<Skills />} />

            <Route path="/portfolio/contact" element={<Contact />} />
            <Route path="/portfolio/portfolio" element={<Portfolio />} />
          </Routes>
         
        </div>
      </Router>
    </>
  );
}

export default App;
