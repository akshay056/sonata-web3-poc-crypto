import { useState, memo, useRef, useCallback } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import "./Table.css";
//import Modal2 from "./Modal2";
import Modal from "./Modal";

 
//import Data from "./datasource";
function Table() {
    //const[show,setShow]= useState(false);
    let gridApi;
    const gridRef = useRef();

    const onExportClick = () => {
        gridApi.exportDataAsCsv();
    }

    const [openModal, setOpenModal] = useState(false);
    const [clickedRowDataName, setclickedRowDataName] = useState();

    function handleClick(params) {
        //setShow(true)
        setOpenModal(true);
        setclickedRowDataName(params.data.firstName);
        console.log("menu clicked", params.data);

    }

    const onGridReady = (params) => {
        console.log("grid is ready");
        gridApi = params.api
        fetch("https://mocki.io/v1/833c03d1-24a6-436c-a027-3ce624f24a55").then(resp=>resp.json())
        .then(resp=>params.api.applyTransaction({add:resp}))

    }

    const removeRenderer = memo((props) => {
        return <i class="fa fa-times-circle"></i>;
    });
    

    const [columnDefs] = useState([
        { field: 'id', filter: true, sortable: true, checkboxSelection: true, headerCheckboxSelection: true, floatingFilter: true, flex: 1 },
        { field: 'email', filter: true, sortable: true, floatingFilter: true, flex: 1 },
        { field: 'firstName', filter: true, sortable: true, floatingFilter: true, flex: 1 },
        { field: 'lastName', filter: true, sortable: true, floatingFilter: true, flex: 1 },
        { field: 'isAdmin', filter: true, sortable: true, floatingFilter: true, flex: 1 },
        // { field: 'createData', filter: true, sortable: true, floatingFilter: true, flex: 1 },
        { field: 'Address', cellRenderer: removeRenderer, floatingFilter: true, flex: 1 },
        {
            field: 'Address', filter: true, sortable: true, flex: 1,cellRendererFramework: (param) =>
            <button type="button" class="btn btn-primary" onClick={() => handleClick(param)}>send</button>
        },
    ]);
    // const columnDefs=[
    //  {headerName:"ID",field:"id",filter: true , sortable: true,  checkboxSelection: true,headerCheckboxSelection: true, floatingFilter:true, flex:1} ,
    //  {headerName:"Name",field:"name",filter: true, sortable: true,floatingFilter:true,flex:1} ,
    //  {headerName:"Email",field:"email",filter: true, sortable: true,floatingFilter:true,flex:1} ,
    //  {headerName:"Body",field:"body",filter: true, sortable: true,floatingFilter:true,flex:1} 
    // ]
    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        console.log("gridRef", gridRef, selectedRows)

    }, []);

    return (
        <>

            <>
                
                <h4 style={{ color: "" }}>User List</h4>
                {/* <div>
                    <button className="excel" onClick={() => onExportClick()}>Export to Excel</button>
                </div> */}

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
                        // rowData={rowData}
                        pagination={true}
                        // paginationPageSize={10}
                        // paginationAutoPageSize={true}
                        // rowSelection={'single'}
                        onSelectionChanged={onSelectionChanged}
                        onGridReady={onGridReady}
                        paginationPageSize={7}

                    >
                    </AgGridReact>
                </div>
                {/* <Modal2 title="NFT List" onClose={()=>setShow(false)} show={show}  /> */}
                <Modal open={openModal} onClose={() => setOpenModal(false)} rowInfo={[clickedRowDataName]}/>
            </>
        </>
    )
}
export default Table;