import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux'

import TrendingFeed from './TrendingFeed'
import Map from './Map'
import Filter from './Filter';
import RelatedTerms from './RelatedTerms';
import Alerts from './Alerts';


export class App extends Component {

  render() {
    return (
      <div className="App flex">
        <div className="leftSections flex">
          <RelatedTerms/>
          <TrendingFeed/>

        </div>
        <div className="rightSections">
          <Filter/>
          <div className="flex">
            <Alerts/>
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

