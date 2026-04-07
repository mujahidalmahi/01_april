import { useEffect, useState } from "react"
const UseStateHook = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(100);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    useEffect(() => {
        console.log("useEffect is running.....!");
    }, [num]);
    const aChanging = () => {
        console.log("A ki value change hoon geyi!");
    };
    const bChanging = () => {
        console.log("B ki value change hoon geyi!");
    }
    useEffect(() => {
        aChanging();
    }, [a]);
    useEffect(() => {
        bChanging();
    }, [b])
  return (
    <div className="h-screen w-full bg-mist-800 font-medium text-white text-2xl">
        <h1>num: {num}</h1>
        <h1>num2: {num2}</h1>
        <button 
        onMouseEnter={() => {
            setNum(num + 1);
        }}
        onMouseLeave={() => {
            setNum2(num2 + 10)
        }}
        >Hover</button>
        <h1>A is {a}</h1>
        <h1>A is {b}</h1>
        <button
        onClick={() => {setA(a+1)}}
        >Change A</button>
        <br />
        <button
        onClick={() => {setB(b-1)}}
        >Change B</button>
    </div>
  )
}

export default UseStateHook