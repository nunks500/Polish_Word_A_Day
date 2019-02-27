import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.css';

class Footer extends Component {

        render(){
            return (
                <div className="Footer">
                    <FontAwesomeIcon icon={faCoffee}  />
                    <div><strong>Designed by <a href="www.github.com/nunks500">Joel Dinis</a></strong></div>
                </div>
            );
        }


}

export default Footer;