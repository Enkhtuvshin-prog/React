import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'bootstrap';
// import UserCard from './components/UserCard';

function App() {
  
  return (
    <div className="app">
      <Header/>
      <Content/>
      <Footer/>
     
    </div>
  );
}

export default App;
