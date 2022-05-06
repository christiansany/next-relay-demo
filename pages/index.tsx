import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Relay GraphQL Demo</h1>
        <Link href="/continent/SA">
          <a>South America</a>
        </Link>
        <Link href="/country/CH">
          <a>Switzerland</a>
        </Link>
        <Link href="/Pasta">
          <a>Home of Pasta</a>
        </Link>
      </main>

    </div>
  );
};

export default Home;
