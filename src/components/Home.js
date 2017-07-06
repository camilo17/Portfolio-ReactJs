import React, {Component} from 'react';
import Parallax from 'react-springy-parallax';  
import {stack as Menu } from 'react-burger-menu'; 
import Skills from './Skills'; 
import Welcome from '../components/Welcome'; 




 class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {



        return (
          <div className="outer-container">
              <Menu styles={styles}>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="#about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        <a id="gihub" className="menu-item" href="/contact">Github</a>
                        <a id="kata" className="menu-item" href="/contact">Skills</a>
                    </Menu> 

             <Parallax ref="parallax" pages={3}>
                 
                  <Parallax.Layer
                      offset={0}
                      speed={1}
                      className="first-image-container"
                      >
                      <Welcome/>
                      <button
                        onClick={() => this.refs.parallax.scrollTo(1)}   
                        name="next"   
                        className="btn btn-primary"                
                      >Next</button>
                      
                  </Parallax.Layer> 
                
                <Parallax.Layer
                  offset={1}
                  speed={1}
                  className="second-image-container"
                >
                  <Skills/>
                  
                </Parallax.Layer> 

                <Parallax.Layer
                  offset={2}
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
    background: '#7b6492',
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




