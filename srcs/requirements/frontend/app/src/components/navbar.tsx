import Link from 'next/link';
import { Disclosure } from "@headlessui/react";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import LanguageListBox from './languageListBox';


type NavBarType = {
	page: any
}

export default function Navbar({ page }: NavBarType) {
	//const [navigation, setNavigation] = useState<string[]>(page["navigation"])
	const navigation : string[] = page["navigation"]

	const [path, setPath] = useState<string[]>([
		"/dashboard",
		"/search",
		"/history"
	])

	const router = useRouter();

	
	return (
		<div className="w-full border font-outfit">
			<nav className="container relative flex flex-wrap items-center justify-between min-h-16 p-4 mx-auto xl:justify-between xl:px-0">
			{/* Logo  */}
			<Disclosure>
			{({ open }) => (
				<div className="flex flex-wrap items-center justify-between w-full xl:w-auto">
					<Link href="/">
					<span className="flex items-center space-x-2 text-2xl font-medium text-white">
						<span>
						<svg fill="#000000" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.949,1.684a1,1,0,0,1-.633,1.265A3.366,3.366,0,0,0,12,6.007,1,1,0,0,1,11,7h-.008A1,1,0,0,1,10,6a5.361,5.361,0,0,1,3.684-4.949A1,1,0,0,1,14.949,1.684Zm-1.9,4a.994.994,0,0,0,.623,1.254A.969.969,0,0,0,14,6.993a1.011,1.011,0,0,0,.946-.665A2.622,2.622,0,0,1,17.9,4.818a1,1,0,0,0,.2-1.99A4.623,4.623,0,0,0,13.051,5.684ZM10,8a3.958,3.958,0,0,1,2,.545A3.958,3.958,0,0,1,14,8a3.992,3.992,0,0,1,1.964,7.472A3.882,3.882,0,0,1,16,16a4,4,0,0,1-8,0,3.882,3.882,0,0,1,.036-.528A3.992,3.992,0,0,1,10,8Zm1.331,2.521A1.979,1.979,0,0,0,10,10a1.993,1.993,0,0,0-.519,3.919,1,1,0,0,1,.667,1.337,2,2,0,1,0,3.7,0,1,1,0,0,1,.667-1.337,1.992,1.992,0,1,0-1.85-3.4A1,1,0,0,1,11.331,10.521ZM23,8a2.994,2.994,0,0,1-2.116,2.852A19.439,19.439,0,0,1,21,14,9,9,0,0,1,3,14a18.7,18.7,0,0,1,.121-3.147A2.991,2.991,0,1,1,5.878,5.672,8.96,8.96,0,0,1,7.5,4.451a1,1,0,0,1,1,1.733A7.121,7.121,0,0,0,5,12.246V14a7,7,0,0,0,14,0V12.246a7.1,7.1,0,0,0-1.75-4.63,1,1,0,0,1,.089-1.411.972.972,0,0,1,.442-.212A2.993,2.993,0,0,1,23,8ZM4.573,7.183A1,1,0,0,0,3,8a1,1,0,0,0,.642.934A10.991,10.991,0,0,1,4.573,7.183ZM21,8a1,1,0,0,0-1.569-.819,9.585,9.585,0,0,1,.933,1.751A1,1,0,0,0,21,8Z"/></svg>
						</span>
						<span className="text-black">MojoLead</span>
					</span>
					</Link>

					<Disclosure.Button
					aria-label="Toggle Menu"
					className="px-2 py-1 ml-auto text-gray-500 rounded-md xl:hidden hover:text-[#408ACE]"
					>
						<svg
							className="w-6 h-6 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="32px"
							height="32px"
							viewBox="0 0 24 24">
							{open && (
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
							/>
							)}
							{!open && (
							<path
								fillRule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
							)}
						</svg>
					</Disclosure.Button>

					<Disclosure.Panel className="flex flex-wrap w-full my-5 xl:hidden">
						{navigation.map((item, index) => (
						<Link href={path[index]} key={index} className="w-full px-4 py-2 -ml-4 text-gray-800 rounded-md hover:text-[#408ACE] focus:text-[#408ACE] focus:outline-none">
							{item}
						</Link>
						))}
						{Cookies.get("access_token") ?
						<div
							className="w-full px-6 py-2 mt-3 text-center text-white bg-[#408ACE] transition duration-300 hover:bg-opacity-80 rounded-md xl:ml-5"
							onClick={() => {Cookies.remove(`access_token`, { path: '/', domain: 'localhost'}); router.refresh()}}
							>
							{page["logout"]}
						</div>
						:
						<>
							<Link href="/auth/login" className="w-full px-4 py-2 -ml-4 text-gray-800 rounded-md hover:text-[#408ACE] focus:text-[#408ACE] focus:outline-none">
								{page["sign_in"]}
							</Link>
							<Link href="/auth/register" className="w-full px-6 py-2 mt-3 text-center text-white bg-[#408ACE] transition duration-300 hover:bg-opacity-80 rounded-md xl:ml-5">         
								{page["sign_up"]}
							</Link>
						</>
						}
					</Disclosure.Panel>
				</div>
			)}
			</Disclosure>

			{/* menu  */}
			<div className="hidden text-center xl:flex xl:items-center">
				<ul className="items-center justify-end flex-1 pt-6 list-none xl:pt-0 xl:flex">
					{navigation.map((menu, index) => (
					<li className="mr-3 nav__item" key={index}>
						<Link href={path[index]} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-[#408ACE] focus:text-[#408ACE] focus:outline-none">
							{menu}
						</Link>
					</li>
					))}
				</ul>
			</div>
			<div className="hidden space-x-4 xl:flex nav__item items-end">
				<LanguageListBox page={page}/>
				{
				Cookies.get("access_token") ?
					<div
					className="px-6 py-2 text-white rounded-md duration-300 transition bg-[#408ACE] hover:bg-opacity-80"
					onClick={() => {Cookies.remove(`access_token`, { path: '/', domain: 'localhost'}); router.refresh()}}
					>
						{page["logout"]}
					</div>
					:
				<>
					<Link href="/auth/login" className="px-6 py-2 text-black rounded-md hover:text-[#408ACE] focus:text-[#408ACE]">
						{page["sign_in"]}
					</Link>
					<Link href="/auth/register" className="px-6 py-2 text-white rounded-md bg-[#408ACE] transition duration-300 hover:bg-opacity-80">
						{page["sign_up"]}
					</Link>
				</>
				}
			</div>
		</nav>
	</div>
	)
}
