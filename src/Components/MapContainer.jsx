import Map from './Map';
import {default as React, Component,} from "react";

export default class MapContainer extends Component {

  constructor(props) {
    props.state = {
      markers: [{
        position: {
          lat: -99.145556,
          lng: 19.419444,
        }
      }]
    }
  }
  render() {
    return (
      <div style={{height:"69%"}}>
      <Map
      containerElement={
        <div sytle={{ height: "69%"}} />
      }
      mapElement={
        <div style={{ height: "69%"}} />
      }
      markers={this.state.markers}
      onMapLoad={this.handleMapLoad}
      onMapClick={this.handleMapClick}
      onMarkerRightClick={this.handleMarkerRightClick}
      onMarkerClick={this.handleMarkerClick}
      onMarkerClose={this.MarkerClose}
        />
      </div>
    );
   }
  }
