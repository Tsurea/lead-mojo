import MapGl, { Source, Layer, NavigationControl, GeolocateControl, Marker } from "react-map-gl";
import { useState, useRef, useEffect } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react'

import mapboxToken from '@utils/mapboxToken';

import { Label, Input, Field } from '@headlessui/react';

type MapType = {
	latitude: number | null;
	longitude: number | null;
	setLatitude: (e: number) => void;
	setLongitude: (e: number) => void;
	page: any;
}

type MapperType = {
	latitude: number | null;
	longitude: number | null;
	setLatitude: (e: number) => void;
	setLongitude: (e: number) => void;
	mapRef: any;
}

const createCircle = (
	latitude: number,
	longitude: number,
	km: number
	) => {
	const points = 128;

	km = km/2;
    var ret = [];
    var distanceX = km/(111.320*Math.cos(latitude*Math.PI/180));
    var distanceY = km/110.574;

    var theta, x, y;
    for(var i=0; i<points; i++) {
        theta = (i/points)*(2*Math.PI);
        x = distanceX*Math.cos(theta);
        y = distanceY*Math.sin(theta);

        ret.push([longitude+x, latitude+y]);
    }
    ret.push(ret[0]);
	return ret
}

export default function Mapper({
		latitude, longitude,
		setLatitude, setLongitude,
		radius, mapRef
	} : MapperType) {

	const viewPort = {
		latitude: 48.86061984785351,
		longitude: 2.337599080135306,
		zoom: 1
	}

	var geojson: FeatureCollection = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'Polygon',
					coordinates: [createCircle(latitude, longitude, radius)],
				},
			} 
		]
	}

	useEffect(() => {
		geojson.features[0].geometry.coordinates = createCircle(latitude, longitude, radius);
	}, [latitude, longitude])

	var layerStyle: any = {
	  id: 'maine',
	  type: 'fill',
	  source: 'maine',
	  layout: {},
	  paint: {
		'fill-opacity': .5,
		'fill-color': '#007cbf'
	  }
	}

	var layerLine: any = {
	  id: 'outline',
	  type: 'line',
	  source: 'maine',
	  layout: {},
	  paint: {
		'line-width': 3,
		'line-color': '#000'
	  }
	}
	
    return (
		<div className="h-96">
			<MapGl
				ref={mapRef}
				mapboxAccessToken={mapboxToken}
				mapStyle="mapbox://styles/mapbox/streets-v12?optimize=true"
				initialViewState={viewPort}
				maxZoom={20}
				minZoom={0}
				onClick={(e) => {
					setLatitude(e.lngLat.lat);
					setLongitude(e.lngLat.lng);
					}}
			>
				<GeolocateControl position="top-left" />
				<NavigationControl position="top-left" />
				{
					(latitude == null && longitude == null) ? <></> : 
					<>
						<Source
							type="geojson"
							data={geojson}
						>
							<Layer {...layerStyle} />
							<Layer {...layerLine} />
						</Source>
						<Marker
							latitude={latitude}
							longitude={longitude}
							anchor="bottom"
						>
							<img
								src="/assets/marker-icon.png"
								alt="marker"
								width={32}
								height={32}
								/>
						</Marker>
					</>
				}
			</MapGl>
		</div>
    );
}
