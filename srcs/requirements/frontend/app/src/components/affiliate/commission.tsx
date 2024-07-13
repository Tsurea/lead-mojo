function Commission({ page }: any) {
	return (
			<div className="mx-auto px-4 md:px-0 py-11 w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] flex flex-col items-center justify-center">
				<h2 className="text-3xl font-bold mb-2 text-center">
					{page["title"]}
				</h2>
				<p className="text-center mb-4">
					{page["subtitle"]}
				</p>
				<div className="flex flex-col justify-center items-center p-10 rounded-md space-y-2">
					<h3 className="text-8xl font-bold">
					30%
					</h3>
					<p className="text-center">
						{page['credits']}
					</p>
				</div>
			</div>
	);
}

export default Commission;
