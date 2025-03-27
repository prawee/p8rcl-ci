import "react-data-grid/lib/styles.css";

import { DataGrid, DataGridHandle } from "react-data-grid";

const columns = [
    { key: 'id', name: "ID" },
    { key: 'name', name: 'Name'}
];

const data = [
    { id: 0, name: 'Prawee' },
    { id: 1, name: 'Wongsa' }
];

const Report = (props: any) => {
    return (
        <DataGrid
            columns={props?.columns || columns}
            rows={props?.rows || data}
            {...props}
        />
    )
};
export type { DataGridHandle as ReportHandle };
export default Report;