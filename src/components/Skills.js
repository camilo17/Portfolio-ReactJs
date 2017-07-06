import React, {Component} from 'react';
global.jquery = require('jquery'); 
import Flight, { Rect } from 'react-flight/dom'; 

class Skills extends Component {
    constructor(props){
        super(props); 
    }

    render(){
        return (
            <Flight interactive ref={flight => (this.flight = flight)}>
                <Flight.Frame source duration={100} showFrames >
                    <div className="keyframe">
                    <Rect
                        name="head-1"
                        radius={5}
                        style={style}
                    
                    /> 
                    <Rect
                        name="head-2"
                        radius={5}
                        style={{
                            backgroundColor: '#E6ECF0',
                            left: 120 - 15,
                            top: 20,
                            width: 120,
                            height: 10,
                        }}
                    /> 
                    </div>  

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