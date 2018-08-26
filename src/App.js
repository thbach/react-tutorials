import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import Output from './components/Output';
import Select from './components/Controls/Select';
import Text from './components/Controls/Text';

class App extends Component {
  state = {
    paras: 4,
    format: 'text',
    text: '',
    selectForm: {
      elementType: 'select',
      elementConfig: {
        options: [
          {value: 'html', displayValue: 'HTML'},
          {value: 'text', displayValue: 'Text'}
        ]
      },
      value: 'html'
    },
    apiUrl: 'https://baconipsum.com/api/?type=all-meat&'
  };

  componentWillMount() {
    const apiURL = `${this.state.apiUrl}paras=${
      this.state.paras
    }&start-with-lorem=1&format=${this.state.selectForm.value}`;
    this.getSampleText(apiURL);
  }

  getSampleText = apiURL => {
    axios
      .get(apiURL)
      .then(res => {
        this.setState({text: res.data});
      })
      .catch(err => console.log(err));
  };

  selectChangedHandler = event => {
    const updatedForm = this.updateObject(this.state.selectForm, {
      value: event.target.value
    });
    this.setState({selectForm: updatedForm});
    const apiURL = `${this.state.apiUrl}paras=${
      this.state.paras
    }&start-with-lorem=1&format=${event.target.value}`;
    this.getSampleText(apiURL);
  };

  textChangedHandler = event => {
    this.setState({paras: event.target.value});
    const apiURL = `${this.state.apiUrl}paras=${
      event.target.value
    }&start-with-lorem=1&format=${this.state.selectForm.value}`;
    this.getSampleText(apiURL);
  };

  updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties
    };
  };

  render() {
    return (
      <div className="App Container">
        <h1>React Sample Text Gen</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Include HTML:</label>
            <Select
              value={this.state.selectForm.value}
              elementConfig={this.state.selectForm.elementConfig}
              changed={event => this.selectChangedHandler(event)}
            />
            <label>Paragraphs</label>
            <Text
              value={this.state.paras}
              changed={event => this.textChangedHandler(event)}
            />
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
