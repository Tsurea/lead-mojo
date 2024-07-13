import { Button, Input, Field, Label, Checkbox } from '@headlessui/react'
import { useEffect } from 'react';

type RegisterFormType = {
	email : string;
	setEmail: (email: string) => void;
	password: string;
	setPassword: (password: string) => void;
	account: boolean;
	setAccount: (account: boolean) => void;
	page: any;
}

function RegisterForm({
	email,
	setEmail,
	password,
	setPassword,
	account,
	setAccount,
	page
	}: RegisterFormType) {
	const header : string = "text-xl text-center w-full mb-4 mx-auto font-bold";
	return (
		<div className="flex flex-col">
			<Field>
				<p className={header}>
					{
						account ?
						page['register']['connect'] :
						page['register']['create']
					}
				</p>
			<div>
			  <div className="mb-8">
				<Label
				  htmlFor="email"
				  className="mb-3 block text-sm font-medium"
				>
				  {page['register']['email']}
				</Label>
				<Input
				  type="email"
				  name="email"
				  placeholder={page['register']['placeholder_email']}
				  className="w-full rounded-md py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border"
				  value={email}
				  onChange={(e) => setEmail(e.target.value)}
				/>
			  </div>
			  <div className="mb-8">
				<Label
				  htmlFor="password"
				  className="mb-3 block text-sm font-medium text-dark "
				>
				  {page['register']['password']}
				</Label>
				<Input
				  type="password"
				  name="password"
				  placeholder={page['register']['placeholder_password']}
				  className="w-full rounded-md py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border"
				  value={password}
				  onChange={(e) => setPassword(e.target.value)}
				/>
			  </div>
			</div>
			<div className="flex flex-row items-center" onClick={() => setAccount(!account)}>
			   <Checkbox
				  checked={account}
				  onChange={setAccount}
				  className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
				>
					  {/* Checkmark icon */}
					  <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
						<path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
					  </svg>
				</Checkbox>
				<p className="ml-2">{page['register']['account']}</p>
			</div>
			</Field>
		</div>
	);
}

export default RegisterForm;
