import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  google,
  maps
} from "react-google-maps";

import {compose, withProps, lifecycle} from 'recompose';
import _ from 'lodash'
import SearchBox from "react-google-maps/lib/components/places/SearchBox";


const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBD2x3uoBXe8vWtIaBkvRvlrD9msa-XhnM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `50%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `90%`, width:`50%` }} />
    }),
  lifecycle({
    componentWillMount(){
      const refs = {};

      this.setState({
         bounds: null,
         center: {
           lat: 19.39776549999999, lng: -99.1713954
         },
         markers: [],
         onMapMounted: ref => {
           refs.map = ref;
         },
         onBoundsChanged: () => {
           this.setState({
             bounds: refs.map.getBounds(),
             center: refs.map.getCenter(),
           })
         },
         onSearchBoxMounted: ref => {
           refs.searchBox = ref;
         },
         onPlacesChanged: () => {
           const places = refs.searchBox.getPlaces();
           const bounds = new window.google.maps.LatLngBounds({lat:19.308451, lng:-99.232083},{lat: 19.567233, lng:-99.016398});

           places.forEach(place => {
             if (place.geometry.viewport) {
               bounds.union(place.geometry.viewport)
             } else {
               bounds.extend(place.geometry.location)
             }
           });
           const nextMarkers = places.map(place => ({
             position: place.geometry.location,
           }));
           const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

           this.setState({
             center: nextCenter,
             markers: nextMarkers,
           });
           // refs.map.fitBounds(bounds);
         }
       })
    }
  }),
  withScriptjs,
  withGoogleMap
)
(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={1}
      onPlacesChanged={props.onPlacesChanged}
    >
    <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}
  </GoogleMap>
);



export default Map;
