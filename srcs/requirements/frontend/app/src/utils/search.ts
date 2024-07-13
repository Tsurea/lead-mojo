import { handleLogin, handleRegister } from '@utils/auth';
import Cookies from 'js-cookie';
import apiAdress from '@utils/apiAdress';

type search_response = {
	id: string;
}

export async function submitSearch(
		name: string,
		age: number,
		gender: number,
		latitude: number,
		longitude: number,
		account: boolean,
		email: string,
		password: string,
) {
	// To connect the user if not already did
	if (!Cookies.get('access_token'))
	{
		console.log(email, password)
		if (account)
			await handleLogin(email, password);
		else
		{
			await handleRegister(email, password);
		}
	}
	const data : string = await fetch(apiAdress + "/search/", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `${Cookies.get('access_token')}`,
			},
			body: JSON.stringify({
				"age": age,
				"name": name,
				"latitude": latitude,
				"longitude": longitude,
				"gender": gender,
			})
		})
		.then(function (res: Response) {
			if (!res.ok)
				throw new Error("error");
			return res.json()
		})
		.catch(function (error) {
			console.error(error)
			return null
		})
	if (data == null)
		return null
	return (data.id)
}
