import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Checkbox, Button, Label, Field, Input } from '@headlessui/react'
import { handleLogin } from '@utils/auth'
import Cookies from 'js-cookie';

type InputAccountType = {
	page: any;
	value: string;
	setValue: (value: string) => void;
	valueText: string;
	error: boolean;
	errorMessage: string;
}

function InputAccount({
	page,
	value,
	setValue,
	valueText,
	error,
	errorMessage} : InputAccountType) {
  const errorInput : string = "border border-red-600";
  return (
                  <div className="mb-8">
                    <Label
                      htmlFor={valueText.toLowerCase()}
                      className={`mb-3 block text-sm ${error ? "font-bold text-red-600" : "font-medium"}`}
                    >
                      {page[valueText]} 
                    {
                      error ? 
                    <Label
                      className="text-red-600 text-sm mb-1 font-bold"
                    >
                      &nbsp;-&nbsp;{errorMessage}
                    </Label> : <></>
                    }
                    </Label>
                    <Input
                      type={valueText.toLowerCase()}
                      name={valueText.toLowerCase()}
                      placeholder={page['placeholder_' + valueText]}
                      className={`w-full rounded-md py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none ${error ? errorInput : ""}`}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
  )
}

type LoginType = {
	page: any;
}

function Login({ page }: LoginType) {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [emailError, setEmailError] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);

	const [emailMessage, setEmailMessage] = useState<string>('');
	const [passwordMessage, setPasswordMessage] = useState<string>('');

	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Cookies.get('access_token') ? true : false)

	const handleClick = async (email: string, password: string) => {
		setEmailError(false);
		setPasswordError(false);
			if (email == "")
			{
			  setEmailMessage("Missing Email");
			  setEmailError(true);
		}
		if (password == "")
		{
		  setPasswordMessage("Missing Password");
		  setPasswordError(true);
		}
		if (emailError || passwordError)
		  return ;
		await handleLogin(email, password);
		if (emailError)
		{
		  setPasswordError(true);
		  setEmailMessage("Invalid Email or Password");
		  setPasswordMessage("Invalid Email or Password");
		}
		else {
			router.push('/profile')
		}
	}

	useEffect(() => {
		router.prefetch('/profile');
		if (isLoggedIn)
			router.push('/profile')
	}, [router, isLoggedIn])

	return (
        <div className="flex flex-wrap bg-[#F3F7FB]">
            <div className="w-full px-4">
              <div className=" mx-auto max-w-[700px] rounded-md bg-primary bg-opacity-5 py-10 px-6 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                  {page['title']}
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  {page['subtitle']}
                </p>
                <Field>
                  <InputAccount
                    value={email}
                    setValue={setEmail}
                    valueText={"email"}
                    error={emailError}
                    errorMessage={emailMessage}
					page={page}
                  />
                  <InputAccount
                    value={password}
                    setValue={setPassword}
                    valueText={"password"}
                    error={passwordError}
                    errorMessage={passwordMessage}
					page={page}
                  />
                  <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center items-end">
                    <div>
                      <a
                        href="#Force a toi"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {page['forgot_password']}
                      </a>
                    </div>
                  </div>
                  <div className="mb-6">
                    <Button
						onClick={() => {handleClick(email, password)}}
						className="flex w-full font-bold items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium transition duration-300 ease-in-out bg-[#408ACE] text-white hover:bg-opacity-80"
					>
                      {page['sign_in']}
                    </Button>
                  </div>
                </Field>
                <p className="text-center text-base font-medium text-body-color">
                  {page['no_account']}&nbsp;
                  <Link href="/auth/register" className="text-primary hover:underline">
                    {page['register']}
                  </Link>
                </p>
              </div>
            </div>
        </div>
    )
}

export default Login;
