import React, {Component,Proptypes} from 'react';
import {render} from 'react-dom';

export class Greeter extends Component {
    render() {
        var name=this.props.name;
        return (
          <h1> Hello {name} </h1>
        );
    };
};
