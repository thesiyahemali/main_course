import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; 

const LOCAL_STORAGE_KEY = "agGridData";  // Key to store data in Local Storage

const Aggrid = () => {
  const rowSelection = 'multiple'; 

  // Function to load data from Local Storage or use default data
  const loadData = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      return JSON.parse(savedData);
    }
    // Default data if Local Storage is empty
    return [
      { index: 1, name: "John Doe", age: 28, rollno: "R001", email: "mailto:john.doe@example.com" },
      { index: 2, name: "Jane Smith", age: 34, rollno: "R002", email: "mailto:jane.smith@example.com" },
      { index: 3, name: "Alice Johnson", age: 25, rollno: "R003", email: "mailto:alice.johnson@example.com" },
      // ... (rest of the default data)
    ];
  };

  // State to manage row data
  const [rowData, setRowData] = useState(loadData);

  // Column definitions
  const [colDefs] = useState([
    { headerCheckboxSelection: true, checkboxSelection: true, width: 50 },
    { field: "index", headerName: "Index" },
    { field: "name", headerName: "Name", editable: true },
    { field: "age", headerName: "Age", editable: true },
    { field: "rollno", headerName: "Roll No", editable: true },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["mailto:abc@gmail.com", "mailto:xyz@gmail.com", "mailto:pqr@gmail.com"],
      },
    },
  ]);

  // Save data to Local Storage whenever rowData changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rowData));
  }, [rowData]);

  // Handle cell value change
  const onCellValueChanged = (params) => {
    const updatedData = rowData.map((row) => {
      if (row.index === params.data.index) {
        return { ...params.data };
      }
      return row;
    });
    setRowData(updatedData);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="ag-theme-alpine w-full max-w-6xl rounded-lg shadow-lg" style={{ height: 570 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          rowSelection={rowSelection}
          onCellValueChanged={onCellValueChanged}  // Handle cell changes
          onGridReady={(params) => {
            params.api.sizeColumnsToFit();
          }}
        />
      </div>
    </div>
  );
};

export default Aggrid;
