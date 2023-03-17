import React, { useState, useEffect, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ethers } from 'ethers';
import Moment from 'react-moment';

const TransactionHistory = () => {

    const [rowData, setRowData] = useState([]);

    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: "Sl.No",
            valueGetter: "node.rowIndex + 1",
            flex: 1.5
        },
        { field: 'to', headerName: 'To Address', filter: true, flex: 5 },
        { field: 'from', headerName: 'From Address', filter: true, flex: 5 },
        {
            field: 'value', headerName: 'Eth Amount', filter: true, cellRendererFramework: (param) => {
                return (ethers.utils.formatEther(param.data.value))
            }, flex: 2
        },
        {
            field: 'timeStamp', headerName: 'Date', filter: true, cellRendererFramework: (param) => {
                var t = param.data.timeStamp;

                return (
                    <Moment unix format="DD/MM/YYYY">{t}</Moment>
                )
            }, flex: 3
        },
        {
            field: 'timeStamp', headerName: 'Time', filter: true, cellRendererFramework: (param) => {
                var t = param.data.timeStamp;

                return (
                    <Moment unix format="HH:mm:ss">{t}</Moment>
                )
            }, flex: 3
        }
    ]);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        autoHeight: true,
        resizable: true
    }));

    const apiKey = 'NCTUG7PQYVC5IHQWKZ4DN3GUX2P8WMYATD'
    const [account, setAccount] = useState('');

    const connect = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        let res = await provider.send("eth_requestAccounts", []);
        setAccount(res[0]);
        console.log("the account is", account);
        fetch(`https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${res[0]}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`)
            .then(response => response.json())
            .then(response => {

                console.log("response is ", response);
                console.log("response.result is ", response.result);
                setRowData(response.result)
            })

    };

    useEffect(() => {
        connect();
    }, [])

    const onGridSizeChanged = (params) => {
        params.api.sizeColumnsToFit();
    }
    return (
        <div>
             <h4>Transaction History</h4><br />
            <div className="ag-theme-alpine" style={{ height: 600, width: 'auto' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    defaultColDef={defaultColDef}
                    onGridSizeChanged={onGridSizeChanged}
                />
            </div>
        </div>
    )
}

export default TransactionHistory;