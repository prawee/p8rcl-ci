import './App.css'
import { Report } from '@p8w/p8rcl-ci';

const columns = [
  { key: 'id', name: "No" },
  { key: 'name', name: 'Item'}
];

const data = [
  { id: 0, name: 'A' },
  { id: 1, name: 'B' },
  { id: 2, name: 'C' },
  { id: 3, name: 'D' },
  { id: 4, name: 'E'}
];

function App() {
  return (
    <>
      <Report
        columns={columns}
        rows={data}
      />
    </>
  )
}

export default App
