import React from "react";
//import Sidebar from "./Sidebar";
import Card from "./Card";
function Dashboard() {
    return(
        <>
        <div className='maincontentdiv'>
        <div><h4 className="header" style={{ color: "#023b6d", marginBottom: "20px" }}>Dashboard</h4></div>
        
        <Card />
        </div>
        {/* <Sidebar /> */}
        </>
    )
}
export default Dashboard;