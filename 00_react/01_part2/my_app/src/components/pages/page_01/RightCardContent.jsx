import { ArrowRight } from "lucide-react"
const RightCardContent = (props) => {
  return (
    <>
        <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
            <h2 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold">{props.id + 1}</h2>
            <div>
                <p className="text-lg leading-[1.3] mb-8 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eos itaque similique magni</p>
                <div className="flex justify-between">
                    <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-sm">{props.tag}</button>
                    <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full text-lg"><ArrowRight /></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default RightCardContent