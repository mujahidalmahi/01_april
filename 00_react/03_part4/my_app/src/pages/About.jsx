import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div className="h-[70vh]">
      <div className="flex gap-8 p-4">
          <Link to="/about/men">Men</Link>
          <Link to="/about/women">Women</Link>
          <Link to="/about/kid">Kid</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default About