import React , {Component} from 'react';
import ReactDOM from 'react-dom'; 
import {hashHistory, Route, Router } from 'react-router'; 

import Home from './components/Home'


class App extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}/>
            </Router>    

        ); 
    }
}

ReactDOM.render(<App/>, document.getElementById('app')); 