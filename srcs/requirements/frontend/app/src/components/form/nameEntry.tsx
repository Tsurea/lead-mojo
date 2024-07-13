
type NameEntryType = {
	name: string;
	setName: (e: string) => void;
	page: any;

	completePage: boolean;
	formPage: number;
	setFormPage: (e: number) => void;
}

function NameEntry({ name, setName, completePage, formPage, setFormPage, page }: NameEntryType) {
	return (
		<div className="flex flex-col content-center justify-center w-full space-y-4">
			<h2 className="text-lg">
				{page['name']['title']}
			</h2>
			<input
					type="text"
					value={name}
					className="w-full rounded-md py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border"
					placeholder={page['name']['placeholder']}
					onChange={(e) => setName(e.target.value)}
					maxLength={2000}
					onKeyDown={(
						event: React.KeyboardEvent<HTMLInputElement>
					) => {
						if (event.key == "Enter" && completePage)
						{
							setFormPage(formPage + 1)
						}
					}}
				/>
		</div>
	);
}

export default NameEntry;
