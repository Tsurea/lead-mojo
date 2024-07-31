import Search from "@components/search/search";

import fs from "fs";
import path from "path";

import dynamic from 'next/dynamic';

import Head from 'next/head';
const NoSSR = dynamic(() => import('@components/navbar'), { ssr: false });

type PropsType = {
	locale: string;
}

export async function getStaticProps({ locale } : PropsType) {
  const filePath = path.join(process.cwd(), 'src/locales', `${locale}.json`);
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      page: data["/search"],
	  navbar: data["navbar"],
    },
  };
}

type SearchType = {
	page: any;
	navbar: any;
}

function SearchPage({ page, navbar }: SearchType) {
    return (
		<>
			<Head>
				<title>{page["title"]}</title>
			</Head>
			<NoSSR page={navbar}/>
			<div className="bg-[#F3F7FB] w-full min-h-[calc(100vh-66px)] xl:min-h-[calc(100vh-78px)] flex items-center justify-center">
				<Search page={page} />
			</div>
		</>
	)
}

export default SearchPage;
