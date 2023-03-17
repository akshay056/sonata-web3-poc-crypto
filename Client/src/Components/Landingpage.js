import Content from "./Content";
import Sidebar from "./Sidebar";
import {useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';

function Landingpage() {
   
    const location = useLocation();
    const[account, setAccount] = useState();

    // const connect=async()=>{
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     let res=await provider.send("eth_requestAccounts", []);
    //     setAccount(res[0]);
    //     console.log("the account is",account);
    // }

    // useEffect(() => {
    //     connect();
    // },[])


    return (

        <>
          
       {/* {(location && location.pathname === "/usernft")? */}
       <div class="container1-fluid">
                <div class="row flex-nowrap">
                    <Sidebar />
                    <div class="col py-3">        
                    <Content />
                    </div>
                </div>
            </div>
       {/* :
       (location && location.pathname ==="/dashboard")?
       <div class="container1-fluid">
       <div class="row flex-nowrap">
           <Sidebar />
           <div class="col py-3">
         
           <Content />
           </div>
       </div>
   </div>:(location && location.pathname==="/nfts")?

<div class="container1-fluid">
<div class="row flex-nowrap">
    <Sidebar />
    <div class="col py-3">
  
    <Content />
    </div>
</div>
</div>:""
       } */}

        </>
    )
}

export default Landingpage;