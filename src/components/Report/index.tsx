import "react-data-grid/lib/styles.css";

import { DataGrid } from "react-data-grid";

const columns = [
    { key: 'id', name: "ID" },
    { key: 'name', name: 'Name'}
];

const rows = [
    { id: 0, name: 'Prawee' },
    { id: 1, name: 'Wongsa' }
];

const Report = (props: any) => {
    return (
        <DataGrid
            {...props}
            columns={columns}
            rows={rows}
        />
    )
};

export default Report;