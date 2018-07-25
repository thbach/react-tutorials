import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);

  }

  render () {
    return this.props.persons.map((person, index) => {
      return <Person 
        key={person.key}            
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}            
        changed={(event) => this.props.changed(event, person.key)} />
    });
  }
} 



export default Persons;