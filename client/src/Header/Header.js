import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {

        render(){
            return (
                <div className="Header">
                    <div>One word of {this.props.title} each day</div>
                </div>
            );
        }


}

export default Header;