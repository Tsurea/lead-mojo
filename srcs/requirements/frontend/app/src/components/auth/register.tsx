import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Label, Field, Input } from '@headlessui/react'
import { handleRegister } from "@utils/auth";

function Register({ page }: any) {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [status, setStatus] = useState<number>(200);
	const router = useRouter()
	
	const handleClick = async (email: string, password: string) => {
		await handleRegister(email, password);
		router.push('/profile')
	}
	return (
        <div className="flex flex-wrap bg-[#F3F7FB]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[700px] rounded-md bg-primary bg-opacity-5 py-10 px-6 sm:p-[60px]">
                <h1 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                  {page["title"]}
                </h1>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  {page["subtitle"]}
                </p>
                <Field>
                  <div className="mb-8">
                    <Label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium"
                    >
                      {page["email"]}
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder={page["placeholder_email"]}
                      className="w-full rounded-md py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
					  value={email}
					  onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-8">
                    <Label
                      htmlFor="password"
                      className="mb-3 block text-sm font-medium text-dark "
                    >
                      {page["password"]}
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder={page["placeholder_password"]}
                      className="w-full rounded-md py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
					  value={password}
					  onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <Button 
						onClick={() => { handleClick(email, password) }}
						className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium transition duration-300 ease-in-out bg-[#408ACE] text-white hover:bg-opacity-80 hover:shadow-signUp"
						>
                      {page["sign_up"]}
                    </Button>
                  </div>
                </Field>
                <p className="text-center text-base font-medium text-body-color">
                  {page["have_account"]}&nbsp;
                  <Link href="/auth/login" className="text-primary hover:underline">
                    {page["register"]}
                  </Link>
                </p>
              </div>
            </div>
        </div>
	)
}

export default Register;
