import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  
    render() {
        return (
          <Router>
            <span className="spanWrapper">
            <Route path="/pl/" exact component={this.PL} />
            <Route path="/pt/" component={this.PT} />
            <Route path="/es/" component={this.ES} />
            <Route path="/jp/" component={this.JP} />
            <Route path="/it/" component={this.IT} />
            <Route path="/ru/" component={this.RU} />
            <Route path="/kr/" component={this.KR} />
            <Route path="/fr/" component={this.FR} />
            <Route path="/de/" component={this.DE} />
            <Route path="/se/" component={this.SE} />
            <Route path="/ar/" component={this.AR} />
            <Route path="/hi/" component={this.HI} />
            <Route path="/no/" component={this.NO} />
            <Route path="/" component={this.PL} />
            </span>
          </Router>
        );   
   }

   HI(){
    return(<div className="App">
    <Header title = {'Hindi'}/>
    <Body lang={'hi'}/>
    <Footer />
  </div>);
   }

   NO(){
    return(<div className="App">
    <Header title = {'Norwegian'}/>
    <Body lang={'no'}/>
    <Footer />
  </div>);
   }

   AR(){
    return(<div className="App">
    <Header title = {'Arabic'}/>
    <Body lang={'ar'}/>
    <Footer />
  </div>);
   }

   SE(){
    return(<div className="App">
    <Header title = {'Swedish'}/>
    <Body lang={'se'}/>
    <Footer />
  </div>);
   }

   DE(){
    return(<div className="App">
    <Header title = {'German'}/>
    <Body lang={'de'}/>
    <Footer />
  </div>);
   }

   FR(){
    return(<div className="App">
    <Header title = {'French'}/>
    <Body lang={'fr'}/>
    <Footer />
  </div>);
   }

   KR(){
    return(<div className="App">
    <Header title = {'Korean'}/>
    <Body lang={'kr'}/>
    <Footer />
  </div>);
   }

   RU(){
    return(<div className="App">
    <Header title = {'Russian'}/>
    <Body lang={'ru'}/>
    <Footer />
  </div>);
   }

   IT(){
    return(<div className="App">
    <Header title = {'Italian'}/>
    <Body lang={'it'}/>
    <Footer />
  </div>);
   }

   JP(){
    return(<div className="App">
    <Header title = {'Japanese'}/>
    <Body lang={'jp'}/>
    <Footer />
  </div>);
   }

   PL(){
    return(<div className="App">
    <Header title = {'Polish'}/>
    <Body lang={'pl'}/>
    <Footer />
  </div>);
  }

  PT(){
    return(<div className="App">
    <Header title = {'Portuguese'}/>
    <Body lang={'pt'}/>
    <Footer />
  </div>);
  }

  ES(){
    return(<div className="App">
    <Header title = {'Spanish'}/>
    <Body lang={'es'}/>
    <Footer />
  </div>);
  }
}

export default App;
