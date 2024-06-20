import { useState } from "react";

import Header from "./components/Header.jsx" ;
import UserInput from "./components/UserInput.jsx" ;
import ResultBody from "./components/ResultBody.jsx";

function App() {
  const[userInputs, setUserInputs] = useState({
    initialInvestment : 1000,
    annualInvestment : 200,
    expectedReturn : 5,
    duration : 10,
   });

   function handleChange(idinput,value){
      setUserInputs(prevUserInputs => {
    return{
      ...prevUserInputs,
    [idinput] : +value,
    };
});
}      
  return (
    <>
      <Header/>
      <UserInput userInputValue={userInputs} executeOnchange={handleChange} />
      <ResultBody finalUserInputValue={userInputs} />
    </>
  )
}

export default App