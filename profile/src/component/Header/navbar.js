import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillMoonStarsFill } from "react-icons/bs";
const navData =['Home', 'About me', 'JS', 'Portfolio'];


const NavbarItem =() =>{
    return(
    <>
    <Nav className="justify-content-center" activeKey="/home">
       <Nav.Link href='/darkMode' className='darkMode' ><BsFillMoonStarsFill/></Nav.Link>
      {
        navData.map((x, index) => <Nav.Item key={index}>
        <Nav.Link href="/home">{x}</Nav.Link>
      </Nav.Item> )
    }   
     </Nav>
    
    </>
    )
};
 export default NavbarItem;