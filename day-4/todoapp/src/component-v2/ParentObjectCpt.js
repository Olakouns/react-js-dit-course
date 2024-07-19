import { useState } from "react";

const ParentObjectCpt = () => {
    const [user, setUser] = useState({
        lastName: '',
        firstName: ''
    });

    const handleUserLastName = (event) => {
        // event event.target.value
        // user.lastName = event.target.value;
        // console.log(user.lastName);
        // setUser(user);
        setUser((previousUser) => {
            return {
                ...previousUser,
                lastName: event.target.value,   
            }
        });
    }
    const handleUserFirstName = (event) => {
        // event event.target.value
        setUser((previousUser) => {
            return {
                ...previousUser,
                firstName: event.target.value,   
            }
        });
    }

    return ( 
        <>
            <h2>ParentObjectCpt</h2>
            <div>
                <p>Nom : {user.lastName}</p>
                <p>Prenom : {user.firstName}</p>
            </div>
            <div>
                <input onChange={handleUserLastName} placeholder="nom" />
                <input onChange={handleUserFirstName} placeholder="prenom" />
            </div>
        </>
     );
}
 
export default ParentObjectCpt;