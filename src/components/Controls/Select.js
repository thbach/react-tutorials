import React from 'react';

const select = props => {
  let inputElement = null;
  inputElement = (
    <select value={props.value} onChange={props.changed}>
      {props.elementConfig.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );

  return <div>{inputElement}</div>;
};

export default select;
