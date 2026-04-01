const Card = (props) => {
    //let name = "Mujahid Al Mahi";
    return (
        <>
            <div className="card">
                <h1>Name: {props.name} <br/> Age: {props.age}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, adipisci!</p>
            </div>
        </>
    )
};

export default Card;