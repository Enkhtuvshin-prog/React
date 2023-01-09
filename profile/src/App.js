import logo from './logo.svg';
import './App.css';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Main/home/Home';
import About from './component/Main/page/about';
import Portfolio from './component/Main/portfolio/portfolio';
function App() {
  return (
    <div className="container">
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
