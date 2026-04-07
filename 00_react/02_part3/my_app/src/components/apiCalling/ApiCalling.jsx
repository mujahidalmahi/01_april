import axios from "axios";
import { useState } from "react";
const ApiCalling = () => {
  const [datas, setDatas] = useState([]);
  const getdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
    const data =  await response.json();
    console.log(data);
  };
  const getDataAxios = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    setDatas(data);
  }
  return (
    <div className="h-screen w-full bg-mauve-800 text-white font-medium text-2xl">
        <button onClick={getdata}>Get Data</button>
        <button onClick={getDataAxios}>Get Data from Axios</button>
        {datas.map((data, id) => {
          return (
            <div key={id}>
              <h1>Name: {data.name}</h1>
            </div>
          )
        })}
    </div>
  )
};

export default ApiCalling;