import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Button, Label} from 'semantic-ui-react';
import { Math } from 'core-js';

// this is ramdom page

class RamdomNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {randomNumber : 0};
        this.changeNumber = this.changeNumber.bind(this);
    }
    changeNumber() {
        var temp = Math.floor(Math.random() * 100);
        this.setState({randomNumber : temp});
    }

    render () {
        return (
            <div>
                <Label size="big">{this.state.randomNumber}</Label> <br />
                <Button color="blue" onClick={this.changeNumber}>Random!</Button><br />
            </div>
        );
    }
}

export default RamdomNumber;