import React, { useState } from 'react'

const Controlled = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setInputValue(e.target.value)
    }
  
    const handleSubmit = (e: unknown) => {
      e.preventDefault();
      console.log(inputValue);
    }
  
    return (
     <>
      <form onSubmit={handleSubmit}>
        <h1>Example of Controlled</h1>
        <label htmlFor="input">Input:</label>
        <input id="input" type="text" value={inputValue} onChange={(e) => handleInputChange(e)} />
        <button type='submit' >Submit</button>
      </form>
     </>
    )
}

export default Controlled