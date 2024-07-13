import Profile from '@components/result/profile';
import Loading from '@components/loading';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

type foundProfile = {
    name: string;
    age: number;
    bio: string;
    gender: string;
    picture: Array<string>;
}

type ResultType = {
	name: string;
	age: number;
	gender: string;
	latitude: number;
	longitude: number;
	id: string;
	ownerId: string;
	paid: boolean;
	profile: Array<foundProfile>;
}

type ResultComponentType = {
	page: any;
}

function ResultComponent({ page }: ResultComponentType) {
	const [result, setResult] = useState<ResultType>({
		name: "",
		age: 0,
		gender: "",
		latitude: 0,
		longitude: 0,
		id: "",
		ownerId: "",
		paid: false,
		profile: []
		});
	const [showProfile, setShowProfile] = useState<boolean>(false);
	const [current, setCurrent] = useState<number>(0);

	const router = useRouter();
	const searchParams = useSearchParams();
	const id : string = searchParams.get('id')


	useEffect(() => {
		fetch(`/api/v1/search/?id=${id}`, {
			method: 'GET',
			headers: {
				'Authorization': `${Cookies.get('access_token')}`
			},
		})
		.then(async (response: Response) => {
			if (!response.ok)
				throw new Error(await response.text());
			return await response.json();
		})
		.then((data) => { setResult(data) })
		.catch((error) => {
			console.error(error);
			router.push('/');
		})
	}, [])

	return (
		<>
			<Profile showProfile={showProfile} setShowProfile={setShowProfile} />
			<div className="py-24 sm:py-32 bg-[#F3F7FB] flex flex-col items-center">
				<div className="w-full flex justify-center items-center">
					<ul className="h-full w-96 flex flex-wrap justify-around items-center">
					{result.profile.map((e, index) => 
						<li
							key={index}
							className="border rounded-md h-64 w-64 m-0.5 p-1 bg-blue-400 cursor-pointer"
							onClick={() => {setShowProfile(true); setCurrent(index)}}
						>
							<div className="flex space-x-1 justify-center text-white">
								<p>{e.name}</p>
								<p>{e.age} ans</p>
							</div>
						</li>
					)}
					</ul>
				</div>
			</div>
		</>
	);
}

export default ResultComponent;
