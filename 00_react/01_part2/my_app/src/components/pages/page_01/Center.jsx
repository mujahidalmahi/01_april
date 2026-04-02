import LeftText from "./LeftText";
import RightCardContainer from "./RightCardContainer";

const Center = (props) => {
    return (
        <>
            <div className="py-10 flex gap-10 items-center h-[90vh] bg-sky-800 px-18">
                <LeftText />
                <RightCardContainer users= {props.users}/>
            </div>
        </>
    )
};

export default Center;