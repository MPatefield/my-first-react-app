import React, { useState } from 'react';



const DynamicForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputList, setInputList] = useState([]);
    const [error, setError] = useState("");
    console.log(inputValue);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    }

    const handleReset = () => {
        setInputValue("");
        setInputList([]);
    }

    const handleAdd = () => {
        if (!inputValue.trim()) {
            setError("Input cannot be empty");
        } else if (inputValue.length < 5) {
            setError("Input must be at least 5 characters long");
        } else {
            setInputList([...inputList, inputValue]);
            setInputValue("");
            setError("");
        }
      }

  return (
     <div>
      <h1>Dynamic Form</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {inputList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleReset}>Reset</button>
      <div>
        <h2>Current Input:</h2>
        {// Display error message if it exists
        }
        <p>{error && <p>{error}</p>}</p>
        <p>{inputValue}</p>
        <p>Input Length: {inputValue.length}</p>
      </div>
    </div>
  )
}

export default DynamicForm
