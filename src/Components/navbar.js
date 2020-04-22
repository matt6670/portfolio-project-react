import React, { Component } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-scroll';

class NavBar extends Component{
    state = {};
    render(){
        return(
            <div className={styles.navbar}>
                <ul>
                <li><Link activeClass="active" to="infoSection" smooth={true} duration={1000}>Home</Link></li>
                <li><Link activeClass="active" to="skillsSection" smooth={true} duration={1000}>Skills</Link></li>
                <li><Link activeClass="active" to="repoSection" smooth={true} duration={1000}>Projects</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;