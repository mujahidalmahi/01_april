import { useState } from "react"
import ChildToParent from "./ChildToParent";

const Main = () => {
    const[name, setName] = useState("No name");
  return (
    <div>
        <h1>{name}</h1>
        <ChildToParent name= {name} setName = {setName} />
    </div>
  )
}

export default Main