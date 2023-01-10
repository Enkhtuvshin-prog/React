import "./App.css";
import "./App.scss";
import Home from "./components/page/home/home";
import Detail from "./components/page/detail/detail";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Btn from "./components/Btn";

const btns = [
  { title: "Add", variant: "primary" },
  { title: "Minus", variant: "danger" },
];
function App() {
  const [count, setCount] = useState(0);

  const HandleClick = (title) => {
    if (title == "Add") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="app">
      <Home></Home>
      <Detail></Detail>
      {/* <Button variant="primary" onClick={HandleClick}>
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button> */}
      <h3>Count: {count}</h3>
      {btns.map((btn) => (
        <Btn
          title={btn.title}
          variant={btn.variant}
          handleClick={HandleClick}
        />
      ))}
    </div>
  );
}

export default App;
