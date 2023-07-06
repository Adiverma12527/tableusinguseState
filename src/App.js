import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const generateTable = () => {
    const tableRows = [];

    for (let i = 1; i <= number; i++) {
      tableRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{i * 2}</td>
          <td>{i * 3}</td>

        </tr>
      );
    }

    return tableRows;
  };

  return (
    <div className="App">
      <label>
        Enter a number:
        <input type="number" value={number} onChange={handleInputChange} />
      </label>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Double</th>
            <th>Triple</th>
          </tr>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
}

export default App;