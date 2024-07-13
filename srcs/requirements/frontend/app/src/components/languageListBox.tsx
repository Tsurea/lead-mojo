import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type LanguageListBoxType = {
	page: any;
}

function LanguageListBox({ page }: LanguageListBoxType) {
	const languages : [{id: number; name: string; value: string;}, {id: number; name: string; value: string;}]= [
		{ id: 1, name: "English", value: "en" },
		{ id: 2, name: "Français", value: "fr" },
	]
	const pathname : string = usePathname();
	const [selected, setSelected] = useState<{id: number, name: string, value: string}>(languages[page["default_language"]])

	return (
	<div className="px-6 py-2 text-black rounded-md hover:text-[#408ACE]">
	  <Listbox value={selected} onChange={setSelected}>
		<ListboxButton
		className="flex justify-between items-center w-24"
		>
		  {selected.name}
			<svg
				width="20px"
				height="20px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-6 h-6 stroke-current group-data-[open]:rotate-180 transition duration-300"
			>
				<path d="M6 9L12 15L18 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</ListboxButton>
		<Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
		  <ListboxOptions
			anchor="bottom"
			className="bg-white w-24 rounded border text-center p-1"
		  >
			{languages.map((language) => (
			  <ListboxOption
				key={language.name}
				value={language}
				className="hover:bg-gray-100 rounded-md"
			  >
				<Link href={pathname} locale={language.value} onClick={() => {setSelected(language)}}>
					<div>{language.name}</div>
				</Link>
			  </ListboxOption>
			))}
		  </ListboxOptions>
		</Transition>
	  </Listbox>
	</div>
	)
}

export default LanguageListBox;
