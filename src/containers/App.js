import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {key: 'asdas', name: 'Max', age:28},
      {key: 'hg', name: 'manu', age:296},
      {key: 'adhthg', name: 'stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false,
    hello: 'hello'
  }

  nameChangedHandler = (event, key) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.key === key;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})

  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler}
          />;      
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          persons={this.state.persons} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}


export default App;
