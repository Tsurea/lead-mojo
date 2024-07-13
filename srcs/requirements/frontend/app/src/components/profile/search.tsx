import Map, {Source, Layer, NavigationControl}from "react-map-gl";
import type {FeatureCollection} from 'geojson';
import { Disclosure, Button, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Link from 'next/link';
import mapboxToken from '@utils/mapboxToken';

type SearchType = {
    id: string;
    name: string;
    age: number;
    gender: string;
    created_at: Date;
    status: string;
    longitude: number;
    latitude: number;
	token: number;
	page: any;
}

type StatusType = {
    status: string;
}

const createCircle = (latitude: number, longitude: number) => {
	const points = 128;

    var km = 3;

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
export default function Search({ 
        id,
        name,
        age,
        gender,
        created_at,
        status,
        longitude,
        latitude,
		token,
		page,
    }: SearchType) {
	const geojson: FeatureCollection = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'Polygon',
					coordinates: [createCircle(latitude, longitude)],
				},
			}, 
		]
	}

	const layerStyle: any = {
	  id: 'maine',
	  type: 'fill',
	  source: 'maine',
	  layout: {},
	  paint: {
		'fill-opacity': .5,
		'fill-color': '#007cbf'
	  }
	}

	const layerLine: any = {
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
        <div className="border-2 w-full divide-y divide-white/5 rounded-xl bg-white/5">
        <Disclosure
			as="div"
			className="p-6 transition duration-300"
			defaultOpen={false}
		>
            <DisclosureButton className="text-black hover:stroke-[#408ACE] group flex w-full items-center justify-between">
                
				<div className="flex flex-col text-left">
					<p className="text-lg text-black font-bold mb-1">
						{name.charAt(0).toUpperCase() + name.substring(1)}
					</p>
					<p className="text-black">
						{status.toLowerCase()}
					</p>
				</div>
                <svg
					width="30px"
					height="30px"
					viewBox="0 0 24 24"
					fill="none"
					className="w-6 h-6 stroke-current group-data-[open]:rotate-180 transition duration-300"
				>
                    <path
						d="M6 9L11.7874 14.7874V14.7874C11.9048 14.9048 12.0952 14.9048 12.2126 14.7874V14.7874L18 9"
						stroke="#323232"
						strokeWidth="2"
						stroke-rule="evenodd"
						strokeLinecap="round"
						strokeLinejoin="round"
						fillRule="evenodd"
						clipRule="evenodd"
					/>
                </svg>
            </DisclosureButton>
            <DisclosurePanel 
				className="mt-2 text-sm/5 text-white/50 origin-top data-[closed]:-translate-y-6 data-[closed]:opacity-0"
			>
                <div className="h-64 flex flex-col justify-center rounded-lg">
                <Map
                    mapboxAccessToken={mapboxToken}
                    mapStyle="mapbox://styles/mapbox/streets-v12?optimize=true"
                    initialViewState={{ latitude: latitude, longitude: longitude, zoom: 11 }}
                    maxZoom={20}
                    minZoom={0}
                >
					<NavigationControl position="top-left" />
				    <Source id="my-data" type="geojson" data={geojson}>
						<Layer {...layerStyle} />
						<Layer {...layerLine} />
					</Source>
				</Map>
                </div>
				<div className="flex flex-row w-full mt-2 justify-between space-x-1">
					<Link
						href={`/result/?id=${id}`}
						className="rounded-md bg-gray-700 transition duration-300 hover:bg-opacity-80 py-3 px-3 text-base font-semibold text-center text-white w-full"
					>
							{page["seeResults"]}
					</Link>
					{ status == "NOT_STARTED" &&
							(
							token > 0 &&
								<Button className="rounded-md bg-gray-700 hover:bg-opacity-80 transition duration-300 py-3 px-3 text-base font-semibold text-center text-white w-full">
										{page["useButton"]}
								</Button>
							)
							||
							(
								<Link href="/pricing" className="rounded-md bg-gray-700 transition duration-300  hover:bg-opacity-80 sm:py-3 py-6 px-3 text-base font-semibold text-center text-white w-full">
										{page["buyButton"]}
								</Link>
							)
					}
				</div>
            </DisclosurePanel>
        </Disclosure>
        </div>
    );
}
