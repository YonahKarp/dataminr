import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux'

import TrendingFeed from './TrendingFeed'
import Map from './Map'
import Filter from './Filter';


export class App extends Component {

  render() {
    return (
      <div className="App flex">
        <TrendingFeed/>
        <div className="rightSections">
          <Filter/>
          <div className="flex">
            <div>Hello world</div>
            <Map/>
          </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

