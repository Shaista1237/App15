import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputArray, setInputArray] = useState('');
  const [secondLargest, setSecondLargest] = useState(null);

  const findSecondLargest = (arr) => {
    if (arr.length < 2) return 'Array must have at least two elements';

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
        secondLargest = arr[i];
      }
    }

    return secondLargest === -Infinity ? 'No second largest element found' : secondLargest;
  };

  const handleFind = () => {
    const arr = inputArray.split(',').map((num) => parseFloat(num.trim()));
    if (arr.some(isNaN)) {
      setSecondLargest('Please enter valid numbers separated by commas');
    } else {
      const result = findSecondLargest(arr);
      setSecondLargest(result);
    }
  };

  return (
    <div className="App">
      <h1>Find Second Largest Element in Array</h1>
      <input
        type="text"
        value={inputArray}
        onChange={(e) => setInputArray(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleFind}>Find Second Largest</button>
      <p>{secondLargest !== null && `Second Largest Element: ${secondLargest}`}</p>
    </div>
  );
}

export default App;
