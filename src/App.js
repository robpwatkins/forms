import React from 'react';
import './App.css';
import Form from './Form';


class App extends React.Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({ 
      fields: {
        ...this.state.fields,
        ...updatedValue
      } 
    });
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <Form onChange={fields => this.onChange(fields)}/>
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </header>
    </div>
  );
  }
}

export default App;
