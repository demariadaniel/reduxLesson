import React, { Component } from 'react';
import BoxB from './BoxB'
import logo from './logo.svg';
import './App.css';

class BoxA extends Component {
  render() {
    return (
      <div className="box-A">
        <BoxB />
      </div>
    );
  }
}

export default BoxA;