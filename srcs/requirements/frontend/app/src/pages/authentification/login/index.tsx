import Login from '@components/auth/login';

import fs from "fs";
import path from "path";

import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('@components/navbar'), { ssr: false });
import Footer from '@components/footer';

type PropsType = {
	locale: string;
}

export async function getStaticProps({ locale } : PropsType) {
  const filePath = path.join(process.cwd(), 'src/locales', `${locale}.json`);
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      page: data["/auth/login"],
	  navbar: data["navbar"],
	  footer: data["footer"]
    },
  };
}

type LoginType = {
	page: any;
	navbar: any;
	footer: any;
}

function LoginPage({ page, navbar, footer }: LoginType) {
	return (
		<>
			<NoSSR page={navbar} />
			<div className="bg-[#F3F7FB] w-full min-h-[calc(100vh-78px)] flex items-center justify-center">
				<Login page={page} />
			</div>
			<Footer page={footer} />
		</>
	);
}

export default LoginPage;
