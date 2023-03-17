import React from "react";
import Card from "./Card";
import TransactionHistory from "./TransactionHistory";
function Employee() {
    return (
        <>
            <div className='maincontentdiv'>
                <div><h3 className="header" style={{ color: "#023b6d", marginBottom: "20px" }}>Employee Page</h3></div><br />
                <Card />
                <TransactionHistory />
            </div>
        </>
    )
}
export default Employee;