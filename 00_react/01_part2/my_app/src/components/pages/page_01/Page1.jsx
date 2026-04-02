import Center from "./Center";
import Navbar from "./Navbar";

const Page1 = (props) => {
    return (
        <>
            <div className="h-screen w-full bg-sky-900">
                <Navbar />
                <Center users = {props.users}/>
            </div>
        </>
    )
};

export default Page1;