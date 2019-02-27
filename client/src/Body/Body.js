import React, { Component } from 'react';
import styles from './Body.css';
import {Howl, Howler} from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class Body extends Component {

        render(){
            return (
                <div>
                    <div className="Body">
                    <div className="wrapper">
                        <div className="Word"><strong>{this.props.siteprops.wordOfTheDay}</strong> </div>
                        <FontAwesomeIcon className="playbutton" onClick={() => this.renderWordSound(this.props.siteprops.wordsound)} icon={faPlay}  />
                    </div>
                    <div>
                        <div className="PhrasePL">{this.props.siteprops.plphrase}</div>
                        <FontAwesomeIcon className="playbuttonPhrase" onClick={() => this.renderWordSound(this.props.siteprops.phrasesound)} icon={faPlay}  />
                    </div>
                    <div className="PhraseEN">{this.props.siteprops.phrase}</div>
                    <div className="Translation">{this.props.siteprops.translation} - {this.props.siteprops.wordtype}</div>

                    </div>
                </div>
               
            );
        }
    
    renderWordSound(wordsound){
        return new Howl({
            src: [wordsound],
            autoplay: true,
            volume: 0.9,
            onend: function() {
              console.log('Finished!');
            }
          });
        }
}

export default Body;