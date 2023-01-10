
import React from 'react'
import { Button } from "react-bootstrap";
const BtnMenu = (props) => {
    return (
        <Button className='Btns'
            variant="warning"
            onClick={() => {
                props.handleClick(props.cate.category);
            }}
        >
            {props.cate.title}
        </Button>
    )
}

export default BtnMenu