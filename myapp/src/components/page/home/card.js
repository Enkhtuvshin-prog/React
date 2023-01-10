
import React from "react";
import "./content.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const Card = ({ card }) => {
  return (
    <div className="col-5 mb-3">
      <img src={card.imageUrl} alt="" />
      <p>{card.date}</p>
      <h5 className="font18 pink">{card.title}</h5>
      <p>{card.text}</p>
      <Button variant="outline-info" >Read More</Button>
      {/* <a className="link" href={card.link}>
        LEARN MORE
      </a> */}
    </div>
  );
};

export default Card;