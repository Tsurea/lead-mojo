import Link from 'next/link';
import { useState } from 'react';

type FooterType = {
	page: any;
}

function Footer({ page }: FooterType) {
	const link : string = "cursor-pointer hover:font-medium";
	const [navigation, setNavigation] = useState<string[]>([
		"contact"
	])

	const [path, setPath] = useState<string[]>([
		"/contact",
	])

	return (
			<div className="border-t flex items-center h-16 justify-center space-x-1 p-4">
				<ul>
				{navigation.map((item, index) => (
					<li key={index}>
						<Link href={path[index]} className={link}>
							{page[item]}
						</Link>
					</li>
				))}
				</ul>
			</div>
	)
}

export default Footer;
