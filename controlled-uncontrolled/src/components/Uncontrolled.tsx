import React, { useRef } from 'react'

const Uncontrolled = () => {
    const inputRef = useRef(null);
  
    const handleSubmit = (e: unknown) => {
      e.preventDefault();
      console.log(inputRef.current.value);
    }
  
    return (
     <>
      <form onSubmit={handleSubmit}>
        <h1>Example of Uncontrolled</h1>
        <label htmlFor="input">Input:</label>
        <input id="input" type="text" ref={inputRef} defaultValue="" />
        <button type='submit' >Submit</button>
      </form>
     </>
    )
}

export default Uncontrolled