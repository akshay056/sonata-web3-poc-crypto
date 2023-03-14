import Content from "./Content";
import Sidebar from "./Sidebar";
import {useLocation} from 'react-router-dom';
function Landingpage() {
   
    const location = useLocation();
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