import { useState } from "react";

const ParentCpt = () => {
    const [mail, setMail] = useState('');

    const handleMail = (event) => {
        console.log(event);
        setMail(event.target.value);
    }
    // const handleMail = (newMail) => {
    //     setMail(newMail);
    // }

    return ( <>
        <h2>ParentCpt</h2>
        <label>Email : {mail}</label>
        <div>
            <input onChange={handleMail} type="email" placeholder="john@dit.sn" />
            {/* <input onChange={(e)=> {
                handleMail(e.target.value)
            }} type="email" placeholder="john@dit.sn" /> */}
        </div>
    </> );
}
 
export default ParentCpt;