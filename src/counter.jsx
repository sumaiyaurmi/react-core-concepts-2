import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

const handleAdd=()=>{
let newcount= count +1;
setCount(newcount)

}
const handleRemove=()=>{
let newCount=count-1;
setCount(newCount)

}

  return (
    <div
      style={{
        border: "2px solid tomato",
        padding: "15px",
        margin: "15px",
        borderRadius: "15px",
      }}
    >
      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Reduce</button>
    </div>
  );
}
