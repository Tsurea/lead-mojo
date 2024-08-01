import { useState, useRef } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import mapboxToken from '@utils/mapboxToken';

function InputLocation({ setLongitude, setLatitude, address, setAddress, mapRef, page }: any) {
	return (
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
						zoom: 9
					})
				}}
		>
			<div
			className="flex flex-col space-y-1"
			>
				<p>{page["location"]}</p>
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
			</div>
		</AddressAutofill>
	);

}

export default InputLocation;
