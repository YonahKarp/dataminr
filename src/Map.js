import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import {setActiveIndex} from './actions'

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
		return (
			<Map
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
			</Map>
		);
	}
}

const mapStateToProps = (state) => ({
	feed: state.filteredFeed,
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
