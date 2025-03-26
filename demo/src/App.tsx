import './App.css'
import { Report } from '@p8w/p8rcl-ci';

const columns = [
  { key: 'id', name: "No" },
  { key: 'item', name: 'Item'}
];

const data = [
  { id: 0, name: 'A' },
  { id: 1, name: 'B' }
];

function App() {
  return (
    <Report 
      header={columns}
      data={data}
    />
  )
}

export default App
