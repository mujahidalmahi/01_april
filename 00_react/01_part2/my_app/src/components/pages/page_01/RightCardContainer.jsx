import RightCard from "./RightCard";

const RightCardContainer = (props) => {
    return (
        <>
            <div className="h-full w-2/3 bg-sky-700 p-6 flex flex-nowrap overflow-x-auto rounded-4xl gap-10">
                {props.users.map((user, id) => {
                    return (
                        <div key = {id}>
                            <RightCard img = {user.img} tag = {user.tag} id= {id}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default RightCardContainer;