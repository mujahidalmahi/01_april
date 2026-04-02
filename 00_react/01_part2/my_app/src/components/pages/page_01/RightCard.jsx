import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <>
        <div className="h-full shrink-0 w-[300] rounded-4xl relative overflow-hidden">
            <img src={props.img} className="h-full w-full object-cover" />
            <RightCardContent tag = {props.tag} id= {props.id}/>
        </div>
    </>
  )
}

export default RightCard