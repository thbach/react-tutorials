import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.button;

    if(props.showPersons) {
        btnClass = [classes.button, classes.Red].join(' ');
    }

    if(props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }    

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}> this is working</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>        
        </Aux>            
    );
};


export default cockpit;