import React, {useState, useEffect, useMemo} from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ethers } from 'ethers';


const TransactionHistory = () => {

    const [rowData, setRowData] = useState([]);

    const [columnDefs, setColumnDefs] = useState([
        {field: 'to', filter: true },
        {field: 'from', filter: true},
        {field: 'value', filter: true, cellRendererFramework: (param) => {
            return (ethers.utils.formatEther(param.data.value))  
        }}
    ]);

    const defaultColDef = useMemo( () => ({
        sortable: true,
        filter: true,
        flex:1,
        wrapText: true, 
        autoHeight: true,
        resizable: true
     }));

     const apiKey = 'NCTUG7PQYVC5IHQWKZ4DN3GUX2P8WMYATD'
     const address = '0x3D511ac622459A10e5127f2745e29Dc79C1088bD'

     const [account, setAccount]= useState('');

     const connect=async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        let res=await provider.send("eth_requestAccounts", []);
        setAccount(res[0]);
        console.log("the account is",account);
        fetch(`https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${res[0]}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`)
            .then(response => response.json())
            .then(response => {
                
                console.log("response is ", response);
                console.log("response.result is ", response.result);
                setRowData(response.result)
        })

    };

    useEffect(() => {
        connect();
    },[])

       

    return(
        <div>
            <div  className="ag-theme-alpine" style={{height: 600 , width: 'auto'}}>
                
                <AgGridReact 
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    //paginationPageSize={7} 
                    defaultColDef={defaultColDef}
                    //animateRows={true} 
                    //onGridSizeChanged = {onGridSizeChanged}
                />
            </div>
        </div>
        
    )

}

export default TransactionHistory;