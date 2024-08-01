import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
const Mapper = dynamic(() => import('@components/search/map'), {ssr: false})
const InputLocation = dynamic(() => import('@components/search/inputLocation'), {ssr: false})

export default function Search({ page }: any ) {
	const [category, setCategory] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [radius, setRadius] = useState<number>(40);

	const [latitude, setLatitude] = useState<number|null>(null);
	const [longitude, setLongitude] = useState<number|null>(null);

	const mapRef = useRef(null);

	const handleEvent = (event) => {
		event.preventDefault();	
		console.log(category, location, radius, latitude, longitude)
	};

	return (
		<form onSubmit={handleEvent} className="flex flex-col w-full">
			<div className="flex flex-col">
				<div className="flex flex-col xl:flex-row xl:space-x-2">
					<div className="flex flex-col space-y-1">
						<p>{page["category"]["title"]}</p>
						<input 
							type="text"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							maxLength={35}
							className="w-full rounded-md mb-2 py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border"
							placeholder={page["category"]['placeholder']}
						/>
					</div>
					<div>
						<InputLocation
							setLongitude={setLongitude}
							setLatitude={setLatitude}
							address={location}
							setAddress={setLocation}
							mapRef={mapRef}
							page={page}
						/>
					</div>
					<button className="font-outfit font-bold text-white bg-blue-700 py-2 px-8 rounded-md hover:bg-opacity-80 duration-300 transition">
						{page["search"]}
					</button>
				</div>
				<div>
					<input 
						type="range"
						value={radius}
						onChange={(e) => setRadius(e.target.value)}
						min={5}
						max={40}
						className=""
					/>
					<p>{radius}{page["km"]}</p>
				</div>
			</div>
			{/*
			<Mapper 
				latitude={latitude}
				setLatitude={setLatitude}
				longitude={longitude}
				setLongitude={setLongitude}
				radius={radius}
				mapRef={mapRef}
			/>
			*/}
		</form>
	);
}
