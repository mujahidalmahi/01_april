import { useState } from "react";

const Main = () => {
    const [heading, setHeading] = useState("");
    const [details, setDetails] = useState("");
    const [tasks, setTasks] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        if(heading.trim() === "") return;
        const copyTasks = [...tasks];
        copyTasks.push({heading, details});
        setTasks(copyTasks);
        setHeading("");
        setDetails("");
    };
    const deleteNote = (id) => {
        const copyTasks = [...tasks];
        copyTasks.splice(id, 1);
        setTasks(copyTasks)
    }
  return (
    <div className="h-screen w-full text-white bg-black">
        <form 
        onSubmit={(e) => {
            submitHandler(e);
        }}
        className="flex items-start flex-col justify-between gap-2 p-10 h-1/2">
            <input 
            type="text" 
            placeholder="Enter Task Heading"
            value={heading}
            onChange={(e) => {
                setHeading(e.target.value);
            }}
            className="px-5 py-2 border-2 rounded-xl text-2xl font-medium w-full outline-none" 
            />
            <textarea 
            type="text" 
            placeholder="Write Details"
            value={details}
            onChange={(e) => {
                setDetails(e.target.value);
            }}
            className="px-5 py-2 border-2 rounded-xl h-32 text-xl w-full outline-none" 
            />
            <button 
            className="bg-white text-black rounded-xl px-5 py-2 font-medium text-xl w-full outline-none cursor-pointer">
                Add Note
            </button>
        </form>
        <div 
        className="p-10 bg-gray-900 overflow-auto border-t-2 border-t-white h-1/2">
            <h1 className="mb-8 text-3xl font-bold">Your notes</h1>
            <div className="flex flex-wrap gap-5">
            {tasks.map((task, id) => {
                return(
                    <div key={id}
                    className="h-64 w-64 rounded-2xl bg-white flex flex-col">
                        <h1 className="text-black px-3 py-2 font-bold text-2xl">{task.heading}</h1>
                        <p className="text-black px-3 py-2 font-medium text-lg h-36">{task.details}</p>
                        <button 
                        onClick={() => {
                            deleteNote(id);
                        }}
                        className="px-10 py-3 bg-red-800 font-medium rounded-2xl cursor-pointer hover:bg-red-500 w-1/2 relative left-15">
                            Delete
                        </button>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Main