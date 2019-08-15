import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import UpDown from './updown.js';
import RandomNumber from './random.js';

// this is index.js for index page

function Home() {
    return (
        <div>
            <h1> Links for my examples </h1>
            <Link to="/updown">updown</Link> <br />
            <Link to="/random">random</Link>
        </div>

    )
}

class App extends React.Component {
    render() {
        return (
            <div> 
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/updown/" component={UpDown} />
                        <Route path="/random/" component={RandomNumber} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));