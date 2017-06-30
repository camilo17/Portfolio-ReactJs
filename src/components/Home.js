import React, {Component} from 'react';
import Parallax from 'react-springy-parallax';  
import {stack as Menu } from 'react-burger-menu'; 

 class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {



        return (
          <div className="container">
              <Menu styles={styles}>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="#about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        
                    </Menu> 

             <Parallax ref="parallax" pages={3}>
                 <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    >
                    
                </Parallax.Layer>   

                <Parallax.Layer
                  offset={.75}
                  speed={1}
                >
                  <div classID="about">about</div>
                </Parallax.Layer> 

                <Parallax.Layer
                  offset={1.25}
                  speed={1}
                >
                  <div>Bye</div>
                </Parallax.Layer>    

            </Parallax>  
           </div>     
                    
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
    background: '#18213A',
    padding: '2.5em 1.5em 0',
    fontSize: '1.25em',
    color: 'grey'
  },
  bmItemList: {
    textDecoration: 'none',
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}; 

export default Home; 




