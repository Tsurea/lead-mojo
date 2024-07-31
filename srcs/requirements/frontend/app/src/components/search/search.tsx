import { useState } from 'react';
import MapForm from '@components/search/map';

export default function Search({ page }: any ) {
	const [category, setCategory] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [radius, setRadius] = useState<number>(40);

	const [latitude, setLatitude] = useState<number>(0);
	const [longitude, setLongitude] = useState<number>(0);


	const handleEvent = (event) => {
		event.preventDefault();	
		console.log(category, location, radius)
	};

	return (
		<form onSubmit={handleEvent} className="flex flex-row space-x-1">
			<div>
				<p>{page["category"]}</p>
				<input 
					type="text"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					maxLength={35}
					className=""
				/>
			</div>
			<div>
				<p>{page["location"]}</p>
				<input 
					type="text"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					maxLength={35}
					className=""
				/>
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
				<p>{radius}km radius</p>
			</div>
			<button className="font-outfit font-bold text-white bg-blue-700 py-2 px-8 rounded-md hover:bg-opacity-80 duration-300 transition">
				{page["search"]}
			</button>
			<MapForm 
				latitude={latitude}
				setLatitude={setLatitude}
				longitude={longitude}
				setLongitude={setLongitude}
				page={page}
			/>
		</form>
	);
}
