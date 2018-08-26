import React from 'react';

const text = props => {
  let inputElement = null;
  inputElement = (
    <input type="number" value={props.value} onChange={props.changed} />
  );

  return <div>{inputElement}</div>;
};

export default text;
