import { useState } from "react";

export default function UserInput(){
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
            [idinput] : value,
            };
    });
    }      
    return (
        <section id ="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investement</label>
                    <input type="number" 
                        value ={userInputs.initialInvestment}
                        required 
                        onChange={(event)=>handleChange("initialInvestment", event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investement</label>
                    <input type="number" 
                        value ={userInputs.annualInvestment} 
                        required 
                        onChange={(event)=>handleChange("annualInvestment", event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" 
                        value ={userInputs.expectedReturn} 
                        required 
                        onChange={(event)=>handleChange("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" 
                        value ={userInputs.duration} 
                        required 
                        onChange={(event)=>handleChange("duration", event.target.value)}/>
                </p>
            </div>
        </section>

    );

}