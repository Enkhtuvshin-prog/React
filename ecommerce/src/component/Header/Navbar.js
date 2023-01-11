import React from 'react';
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BiUser, BiHeart, BiCartAlt } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className='bg-nav'>
            <Container>
                <Row className=''>
                    <Col><img src="./img/logo 1.svg" alt="" /> </Col>
                    <Col>
                        <Form className=" col d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="w-100"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Col>
                    <Col>
                        <div className='d-flex ms-5 text-white'>
                            <p className=' px-3 '><BiUser /> Sign in</p>
                            <p className='px-3' ><BiHeart /> 0</p>
                            <p className='px-3' ><BiCartAlt /> 0</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default Navbar