const mul = (a: number) => (b: number) => (c: number) => a * b * c;

function App() {

  return (
    <>
      <button onClick={() => console.log(mul(2)(3)(4))}>
        Button 1
      </button>
      <button onClick={() => console.log(mul(4)(3)(4))}>
        Button 2
      </button>
    </>
  )
}

export default App
