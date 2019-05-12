import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '95%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3}
        style={mapStyles}
        initialCenter={{
         lat: 37.0902,
         lng: -80.6500523
        }}
      >
        {this.props.feed.map((post, i) =>
            <Marker key={"marker" + i}
                onClick={()=> {console.log("clicked")}}
                position={{lat: post.location.coords.lat, lng: post.location.coords.lng}}
                />
        )}
    </Map>
    );
  }
}

const mapStateToProps = (state) => ({
    feed: state.filteredFeed

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
    apiKey: 'AIzaSyBSVR2Sk1Qx2nv7duw3_y-gIfqjeykvPK8'
  })(MapContainer))
