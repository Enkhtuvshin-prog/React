import "./App.css";
import "./App.scss";
import Home from "./components/page/home/home";
import Detail from "./components/page/detail/detail";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="app">
      {/* <Home></Home> */}
      <Detail></Detail>
      <Button>Hello</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export default App;
