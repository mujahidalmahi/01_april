import { useParams } from "react-router-dom"

const CourseDetails = () => {
    const params = useParams();
  return (
    <div>
        <h1 className="text-2xl h-[85vh] w-full flex justify-center items-center">Course Details: {params.id}</h1>
    </div>
  )
}

export default CourseDetails