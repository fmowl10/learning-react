import React from "react";
//import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Label} from 'semantic-ui-react'

// check https://beomy.tistory.com/33

// Updown
//hello
class UpDown extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value : 0,
        };
        this.add_1 = this.add_1.bind(this);
        this.sub_1 = this.sub_1.bind(this);
    }
    
    add_1() {
        this.setState({value: this.state.value + 1})
    }
    
    sub_1() {
        this.setState({value: this.state.value - 1})
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.add_1}>UP</Button>
                <Button onClick={this.sub_1}>DOWN</Button><br/>
                <Label color='red' size="big">{this.state.value}</Label>
            </div>
        );
    }    
}
//ReactDOM.render(<UpDown />, document.getElementById('root'));
export default UpDown;