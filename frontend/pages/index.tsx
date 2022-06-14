import type { NextPage } from "next"
import Layout from "../components/layout"
import Hero from "../components/hero"
// import { Text, Title, Anchor, Button, Group, Badge, Box, useMantineTheme } from "@mantine/core"
// // import { Code, Rocket } from "tabler-icons-react"
// import Link from "next/link"

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Hero />
      </>
    </Layout>
  )
}

export default Home
