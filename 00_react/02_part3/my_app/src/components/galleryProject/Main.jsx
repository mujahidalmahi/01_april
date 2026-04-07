import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
    const [usersData, setUsersData] = useState([]);
    const [index, setIndex] = useState(3);
    const getData = async () => {
        const {data} = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`);
        setUsersData(data);
    }
    let printUsersData = "Gallery loading......";
    if(usersData.length > 0) {
        printUsersData = usersData.map((userData, id) => {
            return (
                <div key={id}>
                    <a href={userData.url} target="_blank">
                        <div className="h-40 w-44 overflow-hidden rounded-xl">
                        <img src= {userData.download_url}
                        className="h-full w-full object-cover"
                        loading="lazy"/>
                        </div>
                        <h2 className="font-bold text-sm">{userData.author}</h2>
                    </a>
                </div>
            );
        })
    }
    useEffect(() => {
        getData();
    }, [index])
  return (
    <div className="h-screen w-full overflow-auto bg-black text-white p-4 text-2xl">
        <div>
            <h1 className="text-3xl">Gallery App</h1>
        </div>
        <div className="flex flex-wrap gap-5 p-4 justify-center">
            {printUsersData}
        </div>
        <div className="flex justify-center items-center p-4 gap-6">
            <button
            onClick={() => {
                if(index>1) {
                    setIndex(index-1);
                }
            }}
            style={{opacity: index === 1? 0.5 : 1}}
            className="bg-green-600 text-white px-5 py-2 rounded-2xl mb-3 active:scale-95 cursor-pointer"
            >Prev</button>
            <h3 className="text-lg">Page {index}</h3>
            <button
            onClick={() => {setIndex(index+1)}}
            className="bg-green-600 text-white px-5 py-2 rounded-2xl mb-3 active:scale-95 cursor-pointer"
            >Next</button>
        </div>
    </div>
  )
}

export default Main;