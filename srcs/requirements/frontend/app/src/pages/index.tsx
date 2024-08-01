import fs from "fs";
import path from "path";

type PropsType = {
	locale: string;
}

export async function getStaticProps({ locale }: PropsType) {
  const filePath = path.join(process.cwd(), 'src/locales', `${locale}.json`);
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

	return {
		props: {
			page: data["/"]
		}
	};
}

type HomePageType = {
	page: any;
}

function HomePage({ page }: HomeType) {
	return (
		<>
			Homepage
		</>

	);
}

export default HomePage;
