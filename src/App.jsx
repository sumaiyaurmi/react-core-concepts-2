import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import User from "./user";
import Friends from "./Friends";
import Posts from "./Posts";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("btn clicked 2");
  };
  const add = (num) => {
    alert(num);
  };
  return (
    <>
      <h3>React Core concept 2</h3>
<Friends></Friends>
<Posts></Posts>

      <User></User>
      <Team></Team>
      <Counter></Counter>

      {/* Normal -->  <button onclick="handleClick()"> click me </button> */}
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("clicked 3");
        }}
      >
        Click 3
      </button>
      <button
        onClick={() => {
          add(10);
        }}
      >
        Click 4
      </button>
    </>
  );
}

export default App;
