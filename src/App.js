import './App.css';
import Wrapper from './Components/Wrapper';
import Navbar from './Components/Navbar';
import FormWrapper from './Components/FormWrapper';
import MyContext from './Components/ContextObject';
import { useState } from 'react';

const App = () => {
    const [Text, setText] = useState("")

    return (
      <MyContext.Provider value={{Text, setText}}>
        <Wrapper>
          <Navbar/>
          <FormWrapper/>
        </Wrapper>
      </MyContext.Provider>
    );
  }    
  

export default App;
