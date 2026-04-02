import { useState } from "react";
import TwoWayDataBinding from "./TwoWayDataBinding";

const FormHandling = () => {
    const [title, setTitle] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        setTitle("");

    }
  return (
    <>
        <div className="h-screen w-full bg-gray-800">
            <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                <TwoWayDataBinding title = {title} setTitle = {setTitle}/>
                <button className="px-7 py-3 bg-indigo-800 text-white font-medium rounded-2xl cursor-pointer relative top-20 -left-64">Submit</button>
            </form>
        </div>
    </>
  )
}

export default FormHandling