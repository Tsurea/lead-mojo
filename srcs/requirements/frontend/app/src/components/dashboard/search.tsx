import { useState } from 'react';
import Link from 'next/link';

function Search({ page }: any) {
	const [total, setTotal] = useState<number>(0);
	const [left, setLeft] = useState<number>(0);

	const block : string = "bg-white p-4 flex flex-row justify-between w-full shadow-md items-center";
	const searchButton : string = "rounded-full size-14 fill-white p-4";
	const text : string = "font-medium text-xl w-1 text-clip";
	const number : string = "text-4xl";

	return (
		<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 w-full">
			<div className={block}>
				<div className="flex flex-row space-x-4 items-center">
					<Link href="/search" className={searchButton + " bg-red-500 hover:bg-red-600"}>
						<svg viewBox="0 0 24 24" fill="none">
							<path d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z" fill="#ffffff" />
						</svg>
					</Link>
					<p className={text}>
						{page["total"]}
					</p>
				</div>
				<p className={number}>
					{total}
				</p>
			</div>
			<div className={block}>
				<div className="flex flex-row space-x-2">
					<Link href="/search" className={searchButton + " bg-yellow-500 hover:bg-yellow-600"}>
						<svg viewBox="0 0 24 24" fill="none">
							<path d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z" fill="#ffffff" />
						</svg>
					</Link>
					<p className={text}>
						{page["left"]}
					</p>
				</div>
				<p className={number}>
					{left}
				</p>
			</div>
		</div>
	);
}

export default Search;
