import Arrow from "./Arrow";
import HeroText from "./HeroText";

const LeftText = () => {
    return (
        <>
            <div className="h-full w-1/3 flex flex-col justify-between">
                <HeroText />
                <Arrow /> 
            </div>
        </>
    )
};

export default LeftText;