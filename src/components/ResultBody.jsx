import { calculateInvestmentResults } from "../../util/investment.js";

export default function ResultBody({finalUserInputValue}){
    
    const resultsData = calculateInvestmentResults(finalUserInputValue);
    console.log(resultsData);
    
    return (
        <table id ="result">
            <tr>
                <th> Initial Investement </th>
                <th> Interest </th>
                <th> Annual Investement </th>
                <th> Year </th>
            </tr>
            {resultsData.map((data,index)=>
                (
                   <tr key ={index}>
                        <td>{data.valueEndOfYear}</td>
                        <td>{data.valueEndOfYear}</td>
                        <td>{data.valueEndOfYear}</td>
                        <td>{data.valueEndOfYear}</td>
                   </tr>
                )
            )}
        </table>
    );
}