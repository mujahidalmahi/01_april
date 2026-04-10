import { Link, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Contact from "../../pages/Contact"

const ReactRouterDOM = () => {
  return (
    <div className="h-screen w-full bg-gray-800 text-white text-l;g">
        <nav>
            <h2>Navbar</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default ReactRouterDOM