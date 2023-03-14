import {useLocation} from 'react-router-dom';
import Dashboard from './Dashboard';
import Employee from './Employee';

function Content() {
    const location = useLocation();
    console.log("location",location);
    return(
        <> 
        {location && location.pathname ==="/dashboard"&& <Dashboard />}  
        {location && location.pathname ==="/user"&& <Employee />}

        </>
    )
}
export default Content;