import React, { useState } from 'react'

function Table() {

const [number, gettbl] = useState('');

const rows = [];
    for(let i = 1; i <= 10; i++)
    {
    rows.push(
        <tr key={i}> 
        <td>{number} * {i} =  {i * number }</td>
       
        </tr>
    ); 
    }

for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
     
const getTable = (event) => {
    gettbl(event.target.value); // for updating the value
}

  return (
    <div>
<form>
    <label>Enter a Number :-</label>
    <input type="number" placeholder="Enter any Number" 
    onChange={getTable }
    name="number"/> 
  <div>
  <p>{rows}</p>
  </div>
</form>
 
</div>
);
}
   
export default Table
