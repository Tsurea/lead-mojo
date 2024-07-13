import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { submitSearch } from '@utils/search';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic'

// Button
import SearchButton from './searchButton';
import PreviousButton from './previousButton';

import GenderSelection from './genderSelection';
import NameEntry from './nameEntry';
import AgeSelection from './ageSelection';
import RegisterForm from './registerForm';

const MapForm = dynamic(() => import('./map'), {ssr: false})

type FormPageType = {
	name: string;
	age: number;
	gender: number;
	longitude: number | undefined;
	latitude: number | undefined;

	email: string;
	setEmail: (email: string) => void;
	password: string;
	setPassword: (pass: string) => void;
	setLongitude: (e: number) => void;
	setLatitude: (e: number) => void;

	init: boolean
	setInit: (e: boolean) => void;

	setName: (name: string) => void;
	setAge: (age: number) => void;
	setGender: (gender: number) => void;

	account: boolean;
	setAccount: (account: boolean) => void;

	formPage: number;
	setFormPage: (e: number) => void;

	completePage: boolean;
	page: any;
}

function FormPage({
	gender, setGender,
	name, setName,
	age, setAge,
	email, setEmail,
	password, setPassword,
	latitude, setLatitude,
	longitude, setLongitude,
	account, setAccount,
	formPage, setFormPage, completePage, page,
	init, setInit
	}: FormPageType) {
	if (formPage == 0)
		return (<GenderSelection gender={gender} setGender={setGender} page={page}/>)
	else if (formPage == 1)
		return (<NameEntry
					name={name}
					setName={setName}
					formPage={formPage}
					setFormPage={setFormPage}
					completePage={completePage}
					page={page}
				/>)
	else if (formPage == 2)
		return (<AgeSelection
					age={age}
					setAge={setAge}
					page={page}
					formPage={formPage}
					setFormPage={setFormPage}
					completePage={completePage}
				/>)
	else if (formPage == 3)
		return (<MapForm
					latitude={latitude}
					longitude={longitude}
					setLatitude={setLatitude}
					setLongitude={setLongitude}
					init={init}
					setInit={setInit}
					page={page}
				/>)
	else if (formPage == 4 && !Cookies.get("access_token")) {
		return (<RegisterForm
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					account={account}
					setAccount={setAccount}
					page={page}
				/>)
	}
	return (<div className="text-center w-full">Loading...</div>)
}

// gender -> name -> age -> position -> account -> false result -> pay up
type FormType = {
	page: any;
}

function Form({ page } : FormType) {
	const [name, setName] = useState<string>("");
	const [age, setAge] = useState<number>(0);
	const [gender, setGender] = useState<number>(-1);

	// Position
	const [latitude, setLatitude] = useState<number>(48.86061984785351);
	const [longitude, setLongitude] = useState<number>(2.337599080135306);
	const [init, setInit] = useState<boolean>(false);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [account, setAccount] = useState<boolean>(false);

	// Variable to modify the page
	const [completePage, setCompletePage] = useState<boolean>(false);
	const [formPage, setFormPage] = useState<number>(0);

	const router = useRouter();

	useEffect(() => {
		const fetchSearch = async () => {
			const data = (await submitSearch(name, age, gender, latitude, longitude, account, email, password))
			if (data != null)
				router.push(`/result?id=${data}`)
		}
		if (formPage == 0 && gender != -1)
			setCompletePage(true)
		else if (formPage == 1 && name != "")
			setCompletePage(true)
		else if (formPage == 2 && age != undefined && age >= 18 && age < 100)
			setCompletePage(true)
		else if (formPage == 3 && init)
			setCompletePage(true);
		else if (formPage == 4)
		{
			if (Cookies.get("access_token"))
				setFormPage(formPage + 1)
			else if (email != "" && password != "")
				setCompletePage(true);
		}
		else if (formPage == 5)
			fetchSearch()
		else
			setCompletePage(false);
	}, [name, age, gender, latitude, longitude, email, password, account, formPage, router, init])

	return (
		<div className="font-outfit bg-white mx-2 sm:mx-0 w-full max-w-96 rounded-2xl shadow-2xl flex flex-col content-center justify-center border rounded p-6">
			<FormPage 
				gender={gender}
				setGender={setGender}
				name={name}
				setName={setName}
				age={age}
				setAge={setAge}
				formPage={formPage}
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				latitude={latitude}
				setLatitude={setLatitude}
				longitude={longitude}
				setLongitude={setLongitude}
				init={init}
				setInit={setInit}
				account={account}
				setAccount={setAccount}
				page={page}
				setFormPage={setFormPage}
				completePage={completePage}
			/>
			<div className={formPage > 0 ? "flex flex-row justify-between mt-6" : "mt-6 mx-auto"}>
				{formPage > 0 ? <PreviousButton formPage={formPage} setFormPage={setFormPage} page={page}/> : <></>}
				<SearchButton formPage={formPage} completePage={completePage} setCompletePage={setCompletePage} setFormPage={setFormPage} page={page}/>
			</div>
		</div>
	);
}

export default Form;
