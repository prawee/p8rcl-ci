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

const Report = (props: { data: any; header: any }) => {
    const { data, header } = props;
    return (
        <DataGrid
            columns={header ? header : columns}
            rows={data ? data : rows}
        />
    )
};

export default Report;