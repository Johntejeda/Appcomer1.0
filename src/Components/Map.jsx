import {
  default as React,
Component,
} from 'react';
import {withGoogleMap, GoogleMap, InfoWindow, Marker,} from "react-google-maps";

const Map = withGoogleMap(props => {
  return(
    <googleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{lat: -99.145556, lng: 19.419444 }}
    onClick={props.onMapClick}
    defaultOptions={{styles:fancyStyle }}
    >
    {props.markers.map((marker, index) => (
      <Marker
      key={index}
      position={marker.position}
      onClick={()=> props.onMarkerClick(marker)}>
      {marker.showInfo && (
        <InfoWindow onCloseClick={()=> props.onMarkerClose(marker)}>
        {
          marker.imageUrl ? <div id="infowindow"><img src = {marker.imageUrl}/>
        }
        <InfoWindow/>
      )}
      <Marker/>
    ))}
    <GoogleMap/>
  )
  const fancyStyle=[{}]
