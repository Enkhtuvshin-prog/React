import React from 'react'
import "./navbar.css"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/esm/Container';
const nav=["Home", "Catalog", "Blog Pages", "About us"]

function Menu() {
  return (
    <div className='bg-light'>
    <Container className='d-flex'>
        <DropdownButton className='bgBtn  border-0'
            variant=""
            title="Browse categories"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        </DropdownButton>
      {nav.map((x) => (
          <DropdownButton className=''
            variant="light"
            title={x}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          </DropdownButton>
        ),
      )}
      <h3 className='ms-auto'>30 Days Free Return</h3>
    </Container>
    </div>
  );
}

export default Menu;