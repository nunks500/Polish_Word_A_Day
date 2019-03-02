import React, { Component } from 'react';
import styles from './Body.css';
import {Howl, Howler} from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class Body extends Component {

    componentDidMount() {
        var request = '/api';
        request += this.props.lang;

        fetch(request, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
           .then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            const siteprops = {
              siteprops: {
                wordOfTheDay: JSON.parse(data)['xml']['words'][0]['word'][0],
                translation: JSON.parse(data)['xml']['words'][0]['translation'][0],
                phrase: JSON.parse(data)['xml']['words'][0]['enphrase'][0],
                plphrase: JSON.parse(data)['xml']['words'][0]['fnphrase'][0],
                wordtype: JSON.parse(data)['xml']['words'][0]['wordtype'][0],
                wordsound: JSON.parse(data)['xml']['words'][0]['wordsound'][0],
                phrasesound: JSON.parse(data)['xml']['words'][0]['phrasesound'][0],
              }
            }
  
            this.setState(siteprops);
  
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
      }

        render(){
            if (this.state === null) {
                // Render loading state ...
                return (
                  <div className="AppLoading">
                    <h1> . . .</h1>
                  </div>
                );  
              } 
              else{
            return (
                <div>
                    <div className="Body">
                    <div className="wrapper">
                        <div className="Word"><strong>{this.state.siteprops.wordOfTheDay}</strong> </div>
                        <FontAwesomeIcon className="playbutton" onClick={() => this.renderWordSound(this.state.siteprops.wordsound)} icon={faPlay}  />
                    </div>
                    <div>
                        <div className="PhrasePL">{this.state.siteprops.plphrase}</div>
                        <FontAwesomeIcon className="playbuttonPhrase" onClick={() => this.renderWordSound(this.state.siteprops.phrasesound)} icon={faPlay}  />
                    </div>
                    <div className="PhraseEN">{this.state.siteprops.phrase}</div>
                    <div className="Translation">{this.state.siteprops.translation} - {this.state.siteprops.wordtype}</div>

                    </div>
                </div>
               
            );
              }
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