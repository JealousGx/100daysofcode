import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Assistant from "../components/Assistant";
import Login from "../components/Login";

const Home: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Brand Assistant - JealousGx</title>
        <meta
          name="description"
          content="A way to generate snippets and keywords for your brand. Enter your words and get started."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-10 left-0 right-0 -z-10 lg:left-[12.5rem] lg:top-[15%]">
        <div className="absolute left-8 top-16 -z-10 overflow-visible opacity-20">
          <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-red-700 mix-blend-multiply blur-[128px]" />
        </div>
        <div className="absolute left-10 top-32 -z-10 overflow-visible opacity-20">
          <div className="circle-2 -z-10 h-[400px] w-[700px] rounded-full bg-green-700 mix-blend-multiply blur-[128px]" />
        </div>
        <div className="absolute left-12 top-48 -z-10 overflow-visible opacity-20">
          <div className="circle-3 -z-10 h-[600px] w-[500px] rounded-full bg-blue-700 mix-blend-multiply blur-[128px]" />
        </div>
      </div>
      <main className="w-full h-full flex items-center justify-center">
        {loggedIn ? (
          <Assistant />
        ) : (
          <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        )}
      </main>
    </div>
  );
};

export default Home;
