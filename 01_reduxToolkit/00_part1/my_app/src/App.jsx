import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementByFive, increment, incrementByFive } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="h-screen w-full bg-mauve-800 text-white">
      <h1 className="text-2xl font-bold mx-36 py-5">{count}</h1>
      <button
      onClick={() => {
        dispatch(increment())
      }}
       className="px-7 py-3 text-lg font-semibold bg-emerald-800 outline-none border-none rounded-2xl my-4 mx-2 cursor-pointer">Increment</button>
      <button
      onClick={() => {
        dispatch(decrement());
      }}
       className="px-7 py-3 text-lg font-semibold bg-emerald-800 outline-none border-none rounded-2xl my-4 mx-2 cursor-pointer">Decrement</button>
       <button
      onClick={() => {
        dispatch(incrementByFive());
      }}
       className="px-7 py-3 text-lg font-semibold bg-emerald-800 outline-none border-none rounded-2xl my-4 mx-2 cursor-pointer">Increment by 5</button>
       <button
      onClick={() => {
        dispatch(decrementByFive());
      }}
       className="px-7 py-3 text-lg font-semibold bg-emerald-800 outline-none border-none rounded-2xl my-4 mx-2 cursor-pointer">Decrement by 5</button>
    </div>
  )
}

export default App