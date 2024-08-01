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

type HistoryType = {
	page: any;
	navbar: any;
}

function HistoryPage({ page, navbar }: HistoryType) {
    return (
		<>
			<Head>
				<title>{page["title"]}</title>
			</Head>
			<NoSSR page={navbar}/>
			<div className="w-full bg-[#F3F7FB] min-h-[calc(100vh-66px)] xl:min-h-[calc(100vh-78px)]">
				<div
					className="container relative flex flex-col items-center justify-between p-4 mx-auto xl:justify-between xl:px-0 space-y-2"
				>
					Historique
				</div>
			</div>
		</>
	)
}

export default HistoryPage;
