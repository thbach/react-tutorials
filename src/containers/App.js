import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        {key: 'asdas', name: 'Max', age:28},
        {key: 'hg', name: 'manu', age:296},
        {key: 'adhthg', name: 'stephanie', age:26}
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
      hello: 'hello'
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('hi', nextProps, prevState);
    return prevState;    
  }

  getSnapshotBeforeUpdate() {
    console.log('snmapshot');    
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated:true});
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
      <Aux>
        <Cockpit 
          appTitle={this.props.title}
          login={this.loginHandler}
          persons={this.state.persons} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    );
  }
}


export default withClass(App, classes.App);
