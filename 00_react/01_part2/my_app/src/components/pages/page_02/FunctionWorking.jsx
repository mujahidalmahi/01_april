const FunctionWorking = () => {
    const btnClicked = () => {
        console.log("Button is clicked")
    }
  return (
    <>
        <h1 className="text-2xl text-white font-bold p-5">Hello Guys</h1>
        <button onClick={btnClicked} className="px-7 py-4 bg-amber-400 rounded-2xl mx-5 font-semibold text-xl cursor-pointer">Change user</button>
    </>
  )
}

export default FunctionWorking