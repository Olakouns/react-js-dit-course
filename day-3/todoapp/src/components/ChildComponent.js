const ChildComponent = ({email, handlerClick}) => {
    // props type event : handler______
    return ( 
        <>
            <h5>Child component</h5>
            <p><span>Email : </span> {email}</p>
            <button onClick={() => {
                handlerClick();
            }}>Notify Me</button>
            {/* ON_____NAME____ */}
        </>
     );
}
 
export default ChildComponent;