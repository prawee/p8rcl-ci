import "react-data-grid/lib/styles.css";
import React from "react";
import { flushSync } from "react-dom";
import { DataGrid, DataGridHandle } from "react-data-grid";
import { exportToCsv, exportToPdf } from "./exportUtils";

const columns = [
    { key: 'id', name: "ID" },
    { key: 'name', name: 'Name'}
];

const data = [
    { id: 0, name: 'Prawee' },
    { id: 1, name: 'Wongsa' }
];

const Report = (props: any) => {
    const gridRef = React.useRef<DataGridHandle>(null);
    const [isExporting, setIsExporting] = React.useState(false);

    function handleExportToCsv() {
        flushSync(() => {
            setIsExporting(true);
        });
    
        exportToCsv(gridRef.current!.element!, `Report-${Date.now()}.csv`);
    
        flushSync(() => {
            setIsExporting(false);
        });
    }
    
    async function handleExportToPdf() {
        flushSync(() => {
            setIsExporting(true);
        });
    
        await exportToPdf(gridRef.current!.element!, `Report-${Date.now()}.pdf`);
    
        flushSync(() => {
            setIsExporting(false);
        });
    }

    return (
        <div>
            <div>
                <button type="button" onClick={handleExportToCsv}>
                    Export to CSV
                </button>
                <button type="button" onClick={handleExportToPdf} style={{ marginLeft: 20 }}>
                    Export to PDF
                </button>
            </div>
            <DataGrid
                ref={gridRef}
                columns={props?.columns || columns}
                rows={props?.rows || data}
                defaultColumnOptions={{
                    resizable: true,
                    sortable: true,
                }}
                enableVirtualization={!isExporting}
                {...props}
            />
        </div>
    )
};

export default Report;