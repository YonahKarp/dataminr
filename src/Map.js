import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { setActiveIndex } from './actions'

const mapStyles = {
	width: '50%',
	height: '95%'
};

export class MapContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			initialCenter: {
				lat: 37.0902,
				lng: -80.6500523
			}
		};
	}

	render() {
		const { google } = this.props;
		return (
			<Map
				className="map"
				google={this.props.google}
				zoom={this.props.activeIndex ? 5 : 3}
				style={mapStyles}
				initialCenter={this.state.initialCenter}
				center={
					this.props.activeIndex ?
						this.props.feed[this.props.activeIndex].location.coords :
						this.state.initialCenter
				}
			>
				{this.props.feed.map((post, i) =>
					<Marker key={"marker" + i}
						onClick={() => this.props.onMarkerClick(i)}
						position={post.location.coords}
					/>
				)}

				{this.props.alerts.map((post, i) =>
					<Marker key={"marker" + i}
						onClick={() => this.props.onMarkerClick(i)}
						position={post.location.coords}
						icon={{
							url: "http://www.myiconfinder.com/uploads/iconsets/256-256-369f997cef4f440c5394ed2ae6f8eecd.png",
							scaledSize: new google.maps.Size(48, 48)
						}}
					/>
				)}
			</Map>
		);
	}
}

const mapStateToProps = (state) => ({
	feed: state.filteredFeed,
	alerts: state.filteredAlerts,
	activeIndex: state.activeIndex
})

const mapDispatchToProps = (dispatch) => {
	return {
		onMarkerClick: (i) => {
			dispatch(setActiveIndex(i))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
	apiKey: 'AIzaSyBSVR2Sk1Qx2nv7duw3_y-gIfqjeykvPK8'
})(MapContainer))
