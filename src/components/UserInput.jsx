export default function UserInput({executeOnchange, userInputValue})
{
    return (
        <section id ="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investement</label>
                    <input type="number" 
                        value ={userInputValue.initialInvestment}
                        required 
                        onChange={(event)=>executeOnchange("initialInvestment", event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investement</label>
                    <input type="number" 
                        value ={userInputValue.annualInvestment} 
                        required 
                        onChange={(event)=>executeOnchange("annualInvestment", event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" 
                        value ={userInputValue.expectedReturn} 
                        required 
                        onChange={(event)=>executeOnchange("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" 
                        value ={userInputValue.duration} 
                        required 
                        onChange={(event)=>executeOnchange("duration", event.target.value)}/>
                </p>
            </div>
        </section>

    );

}