import Head from "next/head";
import Root from "../components/layout/Root";
import Header from "../components/UI/Header/Header";
import Name from "../components/UI/Name";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import cursor from "../public/scroll.png";

export default function Home() {
  return (
    <>
      <Root>
        <Head>
          <title>Saad's Portfolio</title>
          <meta
            name="description"
            content="portfolio of Muhammad Saad ur Rehman aka green-mint / green-mint"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-full">
          <Header />

          <div className="sm:p-8 h-full flex items-center justify-center">
            <div className="relative bottom-10">
              <Name />
            </div>
          </div>
          {/* <Image src={cursor} /> */}

        </div>
      </Root>
    </>
  );
}
