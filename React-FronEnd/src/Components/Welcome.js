import React from 'react';

 export  default class Welcome extends React.Component {
    render() {
      return <div><h3>Welcome, Vijay {this.props.name}</h3><hr></hr></div>;
    }
  }
