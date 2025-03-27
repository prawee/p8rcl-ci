import './App.css'
import { Report, ReportHandle } from '@p8w/p8rcl-ci';
import { exportToCsv, exportToPdf } from './exportUtils';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const columns = [
  { key: 'id', name: "No" },
  { key: 'name', name: 'Item'}
];

const data = [
  { id: 0, name: 'A' },
  { id: 1, name: 'B' },
  { id: 2, name: 'C' },
  { id: 3, name: 'D' }
];

function App() {

  const [isExporting, setIsExporting] = useState(false);
  const gridRef = useRef<ReportHandle>(null);

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
    <>
        <div>
          <button type="button" onClick={handleExportToCsv}>
            Export to CSV
          </button>
          <button type="button" onClick={handleExportToPdf} style={{ marginLeft: 20 }}>
            Export to PDF
          </button>
        </div>
        <div style={{ marginTop: 20}}>
          <Report
            ref={gridRef}
            columns={columns}
            rows={data}
            defaultColumnOptions={{
              resizable: true,
              sortable: true,
            }}
            enableVirtualization={!isExporting}
          />
        </div>
    </>
  )
}

export default App
