import React from "react";

const Menu = (props) => {
  return (
    <>
      <li key={props.key}>
        <a className="categorys" href="">
          {props.title}
        </a>
      </li>
    </>
  );
};

export default Menu;
