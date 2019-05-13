import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux'

import TrendingFeed from './TrendingFeed'
import Map from './Map'
import Filter from './Filter';
import RelatedTerms from './RelatedTerms';
import Alerts from './Alerts';

import {setFeed, setAlerts} from './actions'


var API = "http://localhost:3001/",
    ALERTS = "alerts",
    FEED = "feed";


export class App extends Component {

  componentDidMount(){
    fetch(API + ALERTS)
    .then((res) => res.json())
    .then(json => {
      this.props.onAlertsFetched(json)
    });

    fetch(API + FEED)
    .then((res) => res.json())
    .then(json => {
      this.props.onFeedFetched(json)
    });
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
      onAlertsFetched: (alerts) => {
          dispatch(setAlerts(alerts))
      },
      onFeedFetched: (feed) => {
        dispatch(setFeed(feed))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

