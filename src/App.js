//bhautik Koshiya

import React, { PureComponent } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends PureComponent {

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return <div>
     
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}

      />
          <Routes>

          <Route exact path="/">
            <News News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={8} country="in" category="general"/>
          </Route>

          <Route exact path="/business">
            <News News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={8} country="in" category="business"/>
          </Route>

          <Route exact path="/entertainment">
            <News News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={8} country="in" category="entertainment"/>
          </Route>

          <Route exact path="/general">
            <News News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={8} country="in" category="general"/> 
          </Route>

          <Route exact path="/health">
            <News News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={8} country="in" category="health"/> 
          </Route>
     
          <Route exact path="/science">
            <News News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={8} country="in" category="science"/> 
          </Route>

          <Route exact path="/sports">
            <News News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={8} country="in" category="sports"/> 
          </Route>

          <Route exact path="/technology">
            <News News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={8} country="in" category="technology"/> 
          </Route>
        </Routes>
        </Router>
      </div>
    
    //   <Navbar/>
    //   <News setProgress={setProgress} pageSize={8} country="in" category="science"/>
    // </div>;
  }
}


// 0aff92faf5b8430282f81faf3ee7886d