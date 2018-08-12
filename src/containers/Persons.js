import React, {Component} from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdded} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDeleted(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdded: () => dispatch({type: actionTypes.ADD}),
    onPersonDeleted: id => dispatch({type: actionTypes.DELETE, personId: id})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
