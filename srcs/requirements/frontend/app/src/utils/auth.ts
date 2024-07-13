// This file handle the communication with the backend for the API call around the auth
// Login Register and Logout
import Cookies from 'js-cookie';
import apiAdress from '@utils/apiAdress';

type jwt_token = {
	access_token: string;
	token_type: string;
	expires_in: number;
}

export async function handleLogin(email: string, password: string) {
	await fetch(apiAdress + "/users/signin", {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			"email": email,
			"password": password,
		})
	})
	.then(function (res: Response) {
		if (!res.ok)
			throw new Error("error");
		return res.json();
	})
	.then(function (e: jwt_token) {
		Cookies.set(
			'access_token',
			e.access_token,
			{
				expires: e.expires_in,
				path: '/'
			}
		)
	})
	.catch(function (error) {
		console.error(error)
	})
}

export async function handleRegister(email : string, password: string) {
	await fetch(apiAdress + "/users/signup", {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			"email": email,
			"password": password,
		})
	})
	.then(function (res: Response) {
		if (!res.ok)
			throw new Error("error");
		return res.json();
	})
	.then(function (e: jwt_token) {
		Cookies.set(
			'access_token',
			e.access_token,
			{
				expires: e.expires_in,
				path: '/'
			}
		)
	})
	.catch(function (error) {
		console.error(error)
	})
}

// Delete access_token
export function logout() {
	Cookies.remove('access_token', { path: '/' })
}
