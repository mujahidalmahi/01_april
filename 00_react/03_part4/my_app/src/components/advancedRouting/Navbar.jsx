import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-amber-800">
        <h2 className="text-xl font-bold">Mahi</h2>
        <div className="flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar