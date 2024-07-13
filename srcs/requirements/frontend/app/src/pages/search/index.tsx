import Form from "@components/form/form";

import fs from "fs";
import path from "path";

import dynamic from 'next/dynamic';

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
			<NoSSR page={navbar}/>
			<div className="bg-[#F3F7FB] w-full min-h-[calc(100vh-78px)] flex items-center justify-center">
			</div>
		</>
	)
}

export default SearchPage;
