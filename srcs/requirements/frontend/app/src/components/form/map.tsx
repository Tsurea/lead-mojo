import MapGl, { NavigationControl, GeolocateControl, Marker } from "react-map-gl";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react'

import mapboxToken from '@utils/mapboxToken';

import type { MapRef } from 'react-map-gl';
import { Label, Input, Field } from '@headlessui/react';

type MapType = {
	latitude: number | undefined;
	longitude: number | undefined;
	setLatitude: (e: number) => void;
	setLongitude: (e: number) => void;
	init: boolean
	setInit: (e: boolean) => void;
	page: any;
}

type MapperType = {
	latitude: number;
	longitude: number;
	setLatitude: (e: number) => void;
	setLongitude: (e: number) => void;


	zoom: number;
	setZoom: (e: number) => void;
	init: number;
	setInit: (e: number) => void;
}

export function Mapper({
		latitude, longitude,
		setLatitude, setLongitude,
		zoom, setZoom,
		init, setInit
	} : MapperType) {

	
    return (
		<div className="h-72">
			<MapGl
				mapboxAccessToken={mapboxToken}
				mapStyle="mapbox://styles/mapbox/streets-v12?optimize=true"
				initialViewState={{
					latitude: latitude,
					longitude: longitude,
					zoom: zoom }}
				maxZoom={20}
				minZoom={0}
				onClick={(e) => {
					setLatitude(e.lngLat.lat);
					setLongitude(e.lngLat.lng);
					setInit(true)
					}}
			>
				<GeolocateControl position="top-left" />
				<NavigationControl position="top-left" />
				{
					(init == false) ? <></> : 
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

function MapForm({ latitude, longitude, setLatitude, setLongitude, init, setInit, page }: MapType) {
	const [address, setAddress] = useState<string>("");
	const [zoom, setZoom] = useState<number>(3);
	const [change, setChange] = useState<number>(0);

	return (
		<Field>
			<Label className="text-lg text-center mb-2">
				{page['map']['title']}
			</Label>
			<AddressAutofill
				accessToken={mapboxToken}
				browserAutofillEnabled={true}
				onRetrieve={
					(res) => {
						setAddress(res.features[0].properties.place_name);
						setLongitude(res.features[0].geometry.coordinates[0]);
						setLatitude(res.features[0].geometry.coordinates[1]);
						setZoom(17);
						setInit(true);
					}}
			>
				<Input
						name="address"
						type="text"
						autoComplete="shipping address-line1"
						className="w-full rounded-md mb-2 py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						maxLength={2000}
						placeholder={page['map']['placeholder']}
				/>
			</AddressAutofill>
			<Mapper
				latitude={latitude}
				longitude={longitude}
				setLatitude={setLatitude}
				setLongitude={setLongitude}
				init={init}
				setInit={setInit}
				zoom={zoom}
				setZoom={setZoom}
			/>
		</Field>
	)
}
export default MapForm;
