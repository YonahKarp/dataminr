import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux'

import TrendingFeed from './TrendingFeed'
import Map from './Map'
import Filter from './Filter';
import RelatedTerms from './RelatedTerms';
import Alerts from './Alerts';

import { mockData } from './mockData'
import { setFeed, setAlerts } from './actions'


var API = "https://dataminr-server.herokuapp.com/",
	ALERTS = "alerts",
	FEED = "feed";


export class App extends Component {

	componentDidMount() {
		fetch(API + ALERTS)
			.then((res) => res.json())
			.then(json => {
				this.props.onAlertsFetched(json)
			}).catch(() => {
				console.log("using local mock data")
				this.props.onAlertsFetched(mockData.alerts)
			});

		fetch(API + FEED)
			.then((res) => res.json())
			.then(json => {
				this.props.onFeedFetched(json)
			}).catch(() => {
				console.log("using local mock data")
				this.props.onFeedFetched(mockData.feed)
			});
	}

	render() {
		return (
			<div className="App flex">
				<div className="leftSections flex">
					<RelatedTerms />
					<TrendingFeed />

				</div>
				<div className="rightSections">
					<Filter />
					<div className="flex">
						<Alerts />
						<Map/>
					</div>
				</div>
			</div>
		)
	}
}

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

export default connect(null, mapDispatchToProps)(App)

