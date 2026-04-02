import { useState } from "react";

const UseStateHook = () => {
    const [num, setNum] = useState(0); // num = 0
    const userInfo = {name: "Mahi", age: 20};
    const [user, setUser] = useState(userInfo);
    const [a, setA] = useState(10);
    const increaseNum = () => {
        setNum(num + 1); // it's asynchronous
    }
    const decreaseNum = () => {
        if(num > 0) {
            setNum(num - 1);
        }
    }
    const btnClicked = () => {
        const newUser = {...user};
        newUser.name = "Iham";
        newUser.age = 21;
        setUser(newUser);
    }
    const undo = () => {
        setUser(userInfo);
    }
    const batchUpdate = () => {
        setA(prev => prev+1);
        setA(prev => prev+1);
        setA(prev => prev+1);
    }
  return (
    <div>
        <>
            <div>
                <h1 className="text-9xl text-white font-bold bg-amber-700 w-60 h-60 align-middle mx-6 my-5 flex justify-center items-center">{num}</h1>
                <button onClick={increaseNum} className="px-7 py-4 bg-amber-400 rounded-2xl mx-5 font-semibold text-xl cursor-pointer">Increase</button>
                <button onClick={decreaseNum} className="px-7 py-4 bg-amber-400 rounded-2xl mx-5 font-semibold text-xl cursor-pointer">Decrease</button>
                <h1 className="text-2xl text-white font-bold mx-6 my-5 ">Username: {user.name} ; Age: {user.age}</h1>
                <button onClick={btnClicked} className="px-7 py-4 bg-amber-400 rounded-2xl mx-5 font-semibold text-xl cursor-pointer">Change Info</button>
                <button onClick={undo} className="px-7 py-4 bg-amber-400 rounded-2xl mx-5 font-semibold text-xl cursor-pointer">Undo Info</button>
                <h1 className="text-2xl text-white font-bold mx-6 my-5 ">{a}</h1>
                <button onClick={batchUpdate} className="px-7 py-4 bg-amber-400 rounded-2xl mx-5 font-semibold text-xl cursor-pointer">Batch Update</button>
            </div>
        </>
    </div>
  )
}

export default UseStateHook