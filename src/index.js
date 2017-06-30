import React , {Component} from 'react';
import ReactDOM from 'react-dom'; 

import Home from './components/Home'; 
import './styles/styles.scss'; 


class App extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <Home/>

        ); 
    }
}

ReactDOM.render(<App/>, document.getElementById('app')); 