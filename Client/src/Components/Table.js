import { useState, memo, useRef, useCallback, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import "./Table.css";
import Modal from "./Modal";

function Table() {
    let gridApi;
    const gridRef = useRef();

    const onExportClick = () => {
        gridApi.exportDataAsCsv();
    }

    const [openModal, setOpenModal] = useState(false);
    const [clickedRowDataEmployeeId, setclickedRowDataEmployeeId] = useState();
    const [clickedRowDataFirstName, setclickedRowDataFirstName] = useState();
    const [clickedRowDatAddress, setclickedRowDatAddress] = useState();

    function handleClick(params) {
        setOpenModal(true);
        setclickedRowDataEmployeeId(params.data.employeeId);
        setclickedRowDataFirstName(params.data.firstName);
        setclickedRowDatAddress(params.data.address);
        console.log("menu clicked", params.data);

    }

    useEffect(() => {
        fetch(`https://172.29.91.71/api/home/GetAll`)
            .then(response => response.json())
            .then(response => {

                console.log("response is ", response);
                setRowData(response)
            })
    }, [])

    const removeRenderer = memo((props) => {
        return <i class="fa fa-times-circle"></i>;
    });

    const [rowData, setRowData] = useState()

    const [columnDefs] = useState([
        { field: 'employeeId', headerName: 'ID', filter: true, sortable: true, floatingFilter: true, flex: 0.75 },
        { field: 'email', filter: true, sortable: true, floatingFilter: true, flex: 2 },
        { field: 'firstName', filter: true, sortable: true, floatingFilter: true, flex: 1 },
        { field: 'lastName', filter: true, sortable: true, floatingFilter: true, flex: 1 },
        { field: 'address', floatingFilter: true, flex: 2 },
        {
            flex: 0.75, cellRendererFramework: (param) =>
                <button type="button" class="btn btn-primary" onClick={() => handleClick(param)}>send</button>
        },
    ]);

    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        console.log("gridRef", gridRef, selectedRows)

    }, []);

    return (
        <>
            <>
                <br />
                <h4 style={{ color: "" }}>Employee List</h4>
                <div
                    className="ag-theme-alpine"
                    style={{
                        height: '500px',
                        width: 'auto'
                    }}
                >
                    <AgGridReact style={{ width: '100%', height: '100%;' }}
                        ref={gridRef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        pagination={true}
                        onSelectionChanged={onSelectionChanged}
                        paginationPageSize={7}>
                    </AgGridReact>
                </div>
                <Modal open={openModal} onClose={() => setOpenModal(false)} rowInfo={[clickedRowDataEmployeeId, clickedRowDataFirstName, clickedRowDatAddress]} />
            </>
        </>
    )
}
export default Table;