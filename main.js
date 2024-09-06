function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="counter1">
      <button onClick={() => setCount((prev) => prev + 10)}>+10</button>
      <h1>Counter App</h1>
      <Counter 
      count={count}
      setCount={setCount}
      className= {`counter ${count>0? 'bg-pink':'bg-w'}`}
      numberStyle = {{fontSize : '30px',color: 'blue'}} />
    </div>
  );
}

function Counter({count, setCount,className,numberStyle}) {
  const updateCounter = (n) => {
    if (count + n < 0) {
      return;
    }
    // setCount(count + n);
    setCount((prv) => {
      prv += n;
      return prv;
    });
  };
  return (
    <div className={className}>
      <button onClick={() => updateCounter(-1)}> - </button>
      <h1 style={{...numberStyle, color: count < 9 ? "green" :"red" } }> {count} </h1>
      <button onClick={() => updateCounter(1)}> + </button>
      <button onClick={() => updateCounter(-count)}> C </button>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
