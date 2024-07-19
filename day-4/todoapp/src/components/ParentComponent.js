import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const username = "razacki@dit.sn";

    const myfunction = () => {
        console.log("notify Me");
    }

    return ( 
        <>
            <ChildComponent email={username} handlerClick={myfunction} />
        </>
     );
}
 
export default ParentComponent;