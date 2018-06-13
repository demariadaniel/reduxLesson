import React, { Component } from 'react';
import BoxD from './BoxD'
import logo from './logo.svg';
import './App.css';

class BoxC extends Component {
  render() {
    return (
      <div className="box-C">
        <BoxD />
      </div>
    );
  }
}

export default BoxC;