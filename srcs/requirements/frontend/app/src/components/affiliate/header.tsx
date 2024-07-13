import Image from 'next/image';
import Link from 'next/link';

function Header({ page }: any) {
	const buttonCss : string = "px-8 py-2 text-center rounded-full w-full font-semibold"
	return (
			<div className="bg-[#F3F7FB] w-full ">
				<div className="mx-auto px-4 sm:px-0 py-11 md:w-[750px] lg:w-[970px] xl:w-[1170px] flex flex-col items-center justify-center md:flex-row">
					<div className="flex flex-col">
						<h1 className="md:text-4xl lg:text-5xl text-2xl font-bold mb-4 text-center md:text-left ">
							{page["title"]}
						</h1>
						<p className="mb-4 font-medium max-w-sm lg:max-w-full">
							{page["subtitle"]}
						</p>
						<div className="flex lg:flex-row flex-col">
							<Link
								className={buttonCss + " text-white mb-2 md:w-max lg:mb-0 bg-[#408ACE] hover:bg-opacity-80 duration-300 transition"}
								href=""
							>
								{page["join_button"]}
							</Link>
							<Link
								className={buttonCss + " text-[#408ACE] md:w-max lg:ml-2 hover:bg-[#408ACE] hover:text-white border border-[#408ACE] duration-300 transition"}
								href=""
							>
								{page["login_button"]}
							</Link>
						</div>
					</div>
					<div className="w-max-[550px] h-max-[550px] block h-auto pt-7 md:pt-0">
						<img
							src={"/assets/pochita.jpeg"}
							className="rounded-full border"
							width={550}
							height={550}
							alt="Please work with us"
						/>
					</div>
				</div>
			</div>
	)
}

export default Header;
