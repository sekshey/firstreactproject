import React, {Component,Proptypes} from 'react';
import {render} from 'react-dom';

import {Greeter} from './Greeter.js';
import {Field} from './Field.js';

export class App extends Component {
  handleNewName(name){
  this.setState({
    name: name
  });
  };
  render() {
      var name=this.state.name;
        return (
          <div>
            <Greeter name={name}/>
            <Field onNewName={this.handleNewName.bind(this)}/>
          </div>
        );
    };
};
