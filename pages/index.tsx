import Head from "next/head";
import Root from "../components/layout/Root";
import Header from "../components/UI/Header/Header";
import Name from "../components/UI/Name";
import ScrollIcon from "../components/UI/ScrollIcon";

export default function Home() {
  return (
    <>
      <Root>
        <Head>
          <title>Saad&lsquo;s Portfolio</title>
          <meta
            name="description"
            content="portfolio of Muhammad Saad ur Rehman aka green-mint / green-mint"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-full overflow-clip">
          <Header />

          <div className="sm:px-8 pb-20 h-full overflow-clip flex flex-col items-center justify-center">
            <Name />
          </div>
          <div className="absolute bottom-16 w-full flex justify-center left-0">
            <ScrollIcon />
          </div>
        </div>
      </Root>
    </>
  );
}
