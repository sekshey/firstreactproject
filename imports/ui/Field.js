import React, {Component,Proptypes} from 'react';
import {render} from 'react-dom';

export class Field extends Component {
    onButtonClick(e){
      e.preventDefault();
      var name=this.refs.name.value;
      console.log(name);
      this.props.onNewName(name);
    }
    render() {
        return (
          <form onSubmit={this.onButtonClick.bind(this)}>
            <input type='text' ref="name" />
            <button>Click</button>
          </form>
        );
    };
};
