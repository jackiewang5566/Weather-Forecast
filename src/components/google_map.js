import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    // the ref system allows us to get a reference
    // a direct reference to an html element that has
    // been rendered to the page
    render() {
        // use this.refs.map to ref below html element
        return <div ref="map"></div>
    }
}

export default GoogleMap;