const TwoWayDataBinding = (props) => {
  return (
    <>
        <input type="text" placeholder="Enter your name" value={props.title} onChange={(e) => {
                    props.setTitle(e.target.value);
                }} className="bg-white text-black font-medium text-xl border-indigo-800 border-2 px-3 py-2 relative left-5 top-5"/>
    </>
  )
}

export default TwoWayDataBinding