import * as actionTypes from './actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      const newPerson = {
        id: Math.random(),
        name: action.payload.name,
        age: action.payload.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.DELETE:
      const updatedPersons = state.persons.filter(
        person => person.id !== action.personId
      );
      return {
        ...state,
        persons: updatedPersons
      };
    default:
      return state;
  }
};

export default reducer;
