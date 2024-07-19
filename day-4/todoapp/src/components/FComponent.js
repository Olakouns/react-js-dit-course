const FComponent = ({name, description, handlerClick}) => {
    return ( 
        <>
            <h1>{name}</h1>
            <p>{description}</p>
            {/* <button onClick={() => {
                // todo : operation
                console.log("Click me");
            }}>Click me</button> */}
            <button onClick={() => {
                handlerClick();
            }}>Click me</button>
        </>
     );
}
 
export default FComponent;