import React, {useContext} from "react";
import MyContext from "./ContextObject";


const Navbar =() => {
    const {Text, setText} = useContext(MyContext);

    return (
        <h1 style= {{backgroundColor:"pink"}}>Hi {Text}!  </h1>
    )
}

export default Navbar