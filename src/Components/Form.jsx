import React, { useContext } from "react";
import MyContext from "./ContextObject";


const Form =() => {
    const {Text, setText} = useContext(MyContext);


    return (
        <div>
            <label>Your Name:</label>
            <input type="text" onChange = {(e) => setText(e.target.value)} />
        </div>
    )
}

export default Form