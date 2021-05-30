import classes from "./Card.module.css";
import React from "react";

const Card = (props) => {
  return (

    <address className={classes.card}>
      
      
  {props.children}
    </address>
  );
};

export default Card;
