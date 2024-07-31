import Link from "next/link";
import Form from "@components/form/form";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import { useRouter } from 'next/router';
import fs from "fs";
import path from "path";

import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('@components/navbar'), { ssr: false });

type PropsType = {
	locale: string;
}

export async function getStaticProps({ locale }: PropsType) {
  const filePath = path.join(process.cwd(), 'src/locales', `${locale}.json`);
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

	return {
		props: {
			page: data["/"],
			search: data['/search'],
			navbar: data["navbar"],
		},
	};
}

type HomePageType = {
	page: any;
	navbar: any;
}

function HomePage({ page, search, navbar }: HomeType) {
	return null;
}

export default HomePage;
