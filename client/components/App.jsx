// @flow
import React from 'react';
import Welcome from './test/Welcome.jsx'
import Clock from './test/Clock.jsx'
import Calculator from './test/Calculator.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello Everyone</h1>
        <Welcome name="Jim" />
        <Clock/>
        <Calculator/>
      </div>);
  }
};