import React from 'react'
import Card from '../Card/Card'
import Button from '../UI/Button'
import classes from './Contact.module.css'
const Contact = (props) => {
    return (
        <Card>
         <header>
      <div className={classes["contact-icon"]}>V</div>  
        <h2>{props.name}</h2>
        <a>{props.email}</a>
      </header>   
      <Button >MORE DETAILS</Button>
        </Card>
    )
}

export default Contact
