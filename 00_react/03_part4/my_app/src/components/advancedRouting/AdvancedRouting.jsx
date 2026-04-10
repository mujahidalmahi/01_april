import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Contact from "../../pages/Contact"
import NotFound from "../../pages/NotFound"
import Men from "../../pages/Men"
import Women from "../../pages/Women"
import Kid from "../../pages/Kid"
import Courses from "../../pages/Courses"
import CourseDetails from "../../pages/CourseDetails"

const AdvancedRouting = () => {
  return (
    <div className="h-screen w-full bg-mauve-800 text-white text-lg">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/about" element={<About />}>
                <Route path="men" element={<Men />} />
                <Route path="women" element={<Women />} />
                <Route path="kid" element={<Kid />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AdvancedRouting