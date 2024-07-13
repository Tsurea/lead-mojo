function Start({ page }: any) {
	const stepsCss : string = "border-2 rounded-md flex flex-col text-center justify-center items-center w-full md:mx-2 md:w-2/3 h-40";
	const stepTitle : string = "text-[#408ACE] text-3xl border-b-4 pb-4 mb-4 border-[#408ACE]";
	const description : string = "font-semibold";

	return (
			<div className="bg-white">
				<div className="mx-auto px-4 md:px-0 py-11 md:w-[750px] lg:w-[970px] xl:w-[1170px] flex flex-col items-center justify-center mx-2 my-2">
					<h2 className="text-3xl font-bold mb-2 text-center">
						{page["title"]}
					</h2>
					<p className="text-center mb-4">
						{page["subtitle"]}
					</p>
					<div className="flex flex-col md:flex-row w-full justify-between items-center space-y-2 md:space-y-0 text-left">
						<div className={stepsCss}>
							<h3 className={stepTitle}>
								01
							</h3>
							<p className={description}>
								{page["1"]}
							</p>
						</div>
						<div className={stepsCss}>
							<h3 className={stepTitle}>
								02
							</h3>
							<p className={description}>
								{page["2"]}
							</p>
						</div>
						<div className={stepsCss}>
							<h3 className={stepTitle}>
								03
							</h3>
							<p className={description}>
								{page["3"]}
							</p>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Start;
