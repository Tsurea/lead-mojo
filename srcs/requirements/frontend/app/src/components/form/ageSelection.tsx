import { Label, Input, Field } from '@headlessui/react';

type AgeSelectionType = {
	age: number | undefined;
	setAge: (e: number) => void;
	page: any;

	completePage: boolean;
	formPage: number;
	setFormPage: (e: number) => void;
}

function AgeSelection({
		age,
		setAge,
		completePage,
		formPage,
		setFormPage,
		page}: AgeSelectionType) {
	return (
		<Field className="flex flex-col content-center justify-center w-full space-y-4">
			<Label className="text-lg text-left">
				{page["age"]["title"]}
			</Label>
			<Input
				className="w-full rounded-md py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border"
				type="number"
				min="18"
				max="99"
				value={age}
				placeholder={page["age"]["placeholder"]}
				onChange={(e) => {e.target.value != null && Number(e.target.value) != undefined ? setAge(Number(e.target.value)) : null }}
				onKeyDown={(
					event: React.KeyboardEvent<HTMLInputElement>
				) => {
					if (event.key == "Enter" && completePage)
						setFormPage(formPage + 1)
				}}
				/>
		</Field>
	)
}

export default AgeSelection;
