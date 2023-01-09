
import React from 'react';
import Container from 'react-bootstrap/Container';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";


const Head = () => {
  return (
    <div>
     <Container className='d-flex my-2'>
        <p>Need help? Call us:(+98) 0234 456 789</p>
        <div className='d-flex ms-auto'>
            <p className='px-3'> <HiOutlineLocationMarker/> Our store</p>
            <p> <FaCarSide/> Track your order</p>
        </div>
    </Container>

    </div>
  )
}

export default Head