import Register from "@components/auth/register"

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
      page: data["/auth/register"],
	  navbar: data["navbar"],
	  footer: data["footer"]
    },
  };
}

type RegisterType = {
	page: any;
	navbar: any;
	footer: any;
}

function RegisterPage({ page, navbar, footer }: RegisterType) {
	return (
		<>
			<NoSSR page={navbar} />
			<div className="bg-[#F3F7FB] w-full min-h-[calc(100vh-130px)] flex items-center justify-center">
				<Register page={page} />
			</div>
			<Footer page={footer} />
		</>
	)

}

export default RegisterPage;
