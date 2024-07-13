import { Button } from '@headlessui/react'
type PreviousButtonType = {
	formPage: number;
	setFormPage: any;
	page: any;
}

function PreviousButton({ formPage, setFormPage, page } : PreviousButtonType) {
	return (
		<Button className="hover:text-[#408ACE]" onClick={() => {if (formPage > 0) { setFormPage(formPage-1) }}}>
			{page['button']['previous']}
		</Button>
	)
}

export default PreviousButton;
