import type { NextPage } from "next"
import Head from "next/head"
import Homepage from "../components/Homepage/Homepage"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Discord | Your Place to Talk and Hang Out</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </div>
  )
}

export default Home
