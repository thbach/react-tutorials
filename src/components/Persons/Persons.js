import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();

  }

  componentDidMount () {
    this.lastPersonRef.current.focus();
  }

  render () {
    return this.props.persons.map((person, index) => {
      return <Person 
        ref={this.lastPersonRef}
        key={person.key}            
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}            
        position={index}
        changed={(event) => this.props.changed(event, person.key)} />
    });
  }
} 



export default Persons;