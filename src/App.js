import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an array with the input values
    const data = [first, second, third, fourth];
    
    // Update the table data state
    setTableData(data);
    
    // Clear the input values
    setFirst('');
    setSecond('');
    setThird('');
    setFourth('');
  };

  return (
    <div className='full'>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="first"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          /><br/>
          <input
            placeholder="second"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
          /><br/>
          <input
            placeholder="third"
            value={third}
            onChange={(e) => setThird(e.target.value)}
          /><br/>
          <input
            placeholder="fourth"
            value={fourth}
            onChange={(e) => setFourth(e.target.value)}
          /><br/>
          <button type="submit">submit</button>
        </form>
        <table className='table'>
          <tr className='tableraw'>
            <th className='tableheading'>s.no</th>
            <th className='tableheading'>name</th>
          </tr>
          {tableData.map((data, index) => (
            <tr key={index} className='tableraw'>
              <td className='tabledata'>{index + 1}</td>
              <td className='tabledata'>{data}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;