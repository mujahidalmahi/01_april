import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate = useNavigate();
  const btnClicked = () => {
    navigate("/");
  }
  return (
    <div>
      <button
       onClick={btnClicked}
       className="bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Return to home page</button>
      <button
       onClick={() => {
        navigate(-1);
       }}
       className="bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Back</button>
      <h1 className="text-2xl h-[85vh] w-full flex justify-center items-center">Contact me</h1>
    </div>
  )
}

export default Contact