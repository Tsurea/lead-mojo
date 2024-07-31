import MapGl, { NavigationControl, GeolocateControl, Marker } from "react-map-gl";
import { useState, useRef } from 'react';
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

export function Mapper({
		latitude, longitude,
		setLatitude, setLongitude,
		mapRef
	} : MapperType) {

	const viewPort = {
		latitude: 48.86061984785351,
		longitude: 2.337599080135306,
		zoom: 1
	}
	
    return (
		<div className="h-72">
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
					<Marker latitude={latitude} longitude={longitude} anchor="bottom">
						<img
							src="/assets/marker-icon.png"
							alt="marker"
							width={32}
							height={32}
							/>
					</Marker>
				}
			</MapGl>
		</div>
    );
}

function MapForm({ latitude, longitude, setLatitude, setLongitude, page }: MapType) {
	const [address, setAddress] = useState<string>("");
	const [change, setChange] = useState<number>(0);
	const mapRef = useRef(null);

	return (
		<Field className="w-full">
		{/*
			<AddressAutofill
				accessToken={mapboxToken}
				browserAutofillEnabled={true}
				onRetrieve={
					(res) => {
						setAddress(res.features[0].properties.place_name);
						setLongitude(res.features[0].geometry.coordinates[0]);
						setLatitude(res.features[0].geometry.coordinates[1]);
						mapRef.current?.flyTo({
							center: [
									res.features[0].geometry.coordinates[0],
									res.features[0].geometry.coordinates[1]
									],
							zoom: 16
						})
					}}
			>
			*/}
				<input
						name="address"
						type="text"
						autoComplete="address-line1"
						className="w-full rounded-md mb-2 py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						maxLength={2000}
						placeholder={page['map']['placeholder']}
				/>
				{/*
			</AddressAutofill>
			*/}
			<Mapper
				latitude={latitude}
				longitude={longitude}
				setLatitude={setLatitude}
				setLongitude={setLongitude}
				mapRef={mapRef}
				/>
		</Field>
	)
	return null
}
export default MapForm;
