import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Employee from './Employee';
import TransactionHistory from './TransactionHistory';

function Content() {
    const location = useLocation();
    console.log("location", location);
    return (
        <>
            {location && location.pathname === "/dashboard" && <Dashboard />}
            {location && location.pathname === "/user" && <Employee />}
            {location && location.pathname === "/TransactionHistory" && <TransactionHistory />}
        </>
    )
}
export default Content;