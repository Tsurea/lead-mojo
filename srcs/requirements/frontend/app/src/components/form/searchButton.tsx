import { Button } from '@headlessui/react';
import Cookies from 'js-cookie';

type SearchButtonType = {
	formPage: number;
	completePage: boolean;
	setCompletePage: (complete: boolean) => void;
	setFormPage: (page: number) => void;
	page: any;
}

function SearchButton({
	formPage,
	completePage,
	setCompletePage,
	setFormPage,
	page
	}: SearchButtonType) {
	const offColor : string = "text-white border rounded-lg min-w-24 h-12 text-center border rounded-lg bg-slate-400";
	const activeColor : string = "text-white border rounded-lg min-w-24 h-12 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500";

	const buttonClick = () => {
		if (completePage) {
			setFormPage(formPage + 1);
			setCompletePage(false);
		}
	};

	return (
		<Button
			className={ completePage ? activeColor : offColor }
			onClick={buttonClick}
		>
			{ formPage == 4 || (Cookies.get('access_token') && formPage == 3) ?
				<p className="mx-2">{page['button']['search_profile']}</p> :
				page['button']['next'] }
		</Button>
	);
}

export default SearchButton;
