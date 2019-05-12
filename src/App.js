import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux'

import TrendingFeed from './TrendingFeed'
import Map from './Map'


export class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="flex">
          <TrendingFeed/>
          <div>hello</div>
          <Map/>
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

