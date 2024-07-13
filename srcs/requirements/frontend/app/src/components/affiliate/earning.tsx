import Link from "next/link"

function Earning({ page }: any) {
	return (
		<div className="bg-white flex justify-center items-center">
			<div className="bg-[#F3F7FB] flex flex-col items-center m-4 md:w-[750px] lg:w-[970px] xl:w-[1170px] p-12 rounded-md">
				<h2 className="text-center text-4xl font-bold mb-4">
					{page["title"]}
				</h2>
				<Link
					className="px-6 py-2 text-white text-center rounded-full bg-[#408ACE] hover:bg-opacity-80 max-w-64 duration-300 transition"
					href=""
				>
					{page["join_button"]}
				</Link>
			</div>
		</div>
	);
}

export default Earning;
