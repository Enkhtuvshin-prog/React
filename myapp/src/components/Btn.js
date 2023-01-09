// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
// // import { Button } from "react-bootstrap";

// const Btn = (props) => (
//   <Button
//     variant={props.variant}
//     onClick={() => props.handleClick(props.title)}
//   >
//     {" "}
//     {props.title}
//   </Button>
// );

// export default Btn;

import { Button } from "react-bootstrap";

const Btn = (props) => {
  return (
    <Button
      variant="danger"
      onClick={() => {
        props.handleChange(props.menu.category);
      }}
    >
      {props.menu.name}
    </Button>
  );
};
export default Btn;
