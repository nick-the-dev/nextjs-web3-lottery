import type { NextPage } from "next"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import Info from "../components/sections/info"
import BuyATicket from "../components/sections/buy-a-ticket"
import HowToPlay from "../components/sections/how-to-play"
import Roadmap from "../components/sections/roadmap"
// import { Text, Title, Anchor, Button, Group, Badge, Box, useMantineTheme } from "@mantine/core"
// // import { Code, Rocket } from "tabler-icons-react"
// import Link from "next/link"

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <Info />
        <BuyATicket />
        <HowToPlay />
        <Roadmap />
      </>
    </Layout>
  )
}

export default Home
