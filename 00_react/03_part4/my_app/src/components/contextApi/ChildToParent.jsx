import { useContext } from "react";
import { ThemeDataContext } from "../../contexts/ThemeContext";

const ChildToParent = (props) => {
    const value = useContext(ThemeDataContext);
    const btnClicked = () => {
        props.setName(value);
    }
  return (
    <div>
        <button
       onClick={btnClicked}
       className="bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Change name</button>
    </div>
  )
}

export default ChildToParent