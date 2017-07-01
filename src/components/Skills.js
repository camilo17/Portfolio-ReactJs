import React, {Component} from 'react';
import {jquery as $} from 'jquery'; 
import Flight, { Rect } from 'react-flight/dom'; 

class Skills extends Component {
    constructor(props){
        super(props); 
    }

    render(){
        return (
            <Flight>
                <Flight.Frame duration={100} source>
                    <Rect
                        name="head-1"
                        radius={5}
                        style={style}
                    
                    
                    
                    
                    />    

                </Flight.Frame>    
            </Flight>    
           
        ); 
    }
}

let style = {
    backgroundColor: 'red',
    left: 30,
    top: 20,
    width: 50,
    height: 10
};

export default Skills; 