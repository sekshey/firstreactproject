import React, {Component,Proptypes} from 'react';
import {render} from 'react-dom';

import {Greeter} from './Greeter.js';

export class App extends Component {
    render() {
        return (
          <Greeter name='Sekshey'/>
        );
    };
};
