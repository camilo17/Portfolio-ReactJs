import React, {Component} from 'react';
import Parallax from 'react-springy-parallax';  
import {stack as Menu } from 'react-burger-menu'; 

 class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {



        return (



           
             <Parallax ref='parallax' pages={3}>

                 <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    >
                    <Menu styles={styles}>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        
                    </Menu>
                     
                 </Parallax.Layer>    

             </Parallax>      
                    
        ); 
    }
}

let styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}; 

export default Home; 




