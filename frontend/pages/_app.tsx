import { AppProps } from "next/app"
import { useState } from "react"
import Head from "next/head"
// global styles
import "../styles/globals.scss"
// mantine theming

import "../styles/styles.scss"

export default function App() {
  return (
    <>
      <Head>
        <title>NFT Lootery</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Don't miss the opportunity to easily win 1 ETH" />
      </Head>

      <div>
        <a href="/bnb">BNB</a>
        <br />
        <a href="/bnb">Polygon</a>
      </div>
    </>
  )
}
