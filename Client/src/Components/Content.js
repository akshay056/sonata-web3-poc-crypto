import {useLocation} from 'react-router-dom';
import "./Content"
//import Usernft from './UserNftpage';
import Dashboard from './Dashboard';
function Content() {
    const location = useLocation();
    console.log("location",location);
    return(
        <> 
        {location && location.pathname ==="/dashboard"&& <Dashboard />}  
        {/* {location && location.pathname ==="/usernft" && <Usernft />}   */}
        </>
    )
}
export default Content;