import React from "react";
import Card from "./Card";
import TransactionHistory from "./TransactionHistory";
function Employee() {
    return(
        <>
        <div className='maincontentdiv'>
        <div><h4 >Employee Page</h4></div>
        <Card />
        <h4>Transaction History</h4>
        <TransactionHistory />
        </div>
        </>
    )
}
export default Employee;