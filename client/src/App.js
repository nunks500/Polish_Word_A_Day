import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import './App.css';

class App extends Component {

    componentDidMount() {
      fetch('/api', {
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
  
    render() {
      if (this.state === null) {
        // Render loading state ...
        return (
          <div className="AppLoading">
            <h1> . . .</h1>
          </div>
        );  
      } else {

        return (
            <div className="App">
              <Header />
              <Body siteprops = {this.state.siteprops} />
              <Footer />
            </div>
        );   
      }
   }
}

export default App;
