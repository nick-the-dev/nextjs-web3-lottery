import type { NextPage } from "next"
import Layout from "../components/layout"
import { Text, Title, Anchor, Button, Group, Badge, Box, useMantineTheme } from "@mantine/core"
import Hero from "../components/hero"
import { Code, Rocket } from "tabler-icons-react"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Hero
          left={
            <Box sx={{ width: "70%" }}>
              <Title>NextJS + Web3 Starter</Title>
              <Text>
                <b>A template for your fresh decentralized application</b>. Develop and deploy your contracts using
                Hardhat, and then interact with them in your web application using NextJS. Furthermore, enjoy the beauty
                of TypeScript in doing so!
              </Text>
            </Box>
          }
          right={<Rocket size={200} style={{ margin: "auto" }} />}
        />
        <Hero
          left={<Code size={200} style={{ margin: "auto" }} />}
          right={
            <Group sx={{ width: "60%" }}>
              {[
                ["https://nextjs.org/", "NextJS"],
                ["https://www.typescriptlang.org/", "TypeScript"],
                ["https://mantine.dev/", "MantineUI"],
                ["https://tabler-icons-react.vercel.app/", "Tabler Icons"],
                ["https://github.com/Web3Modal/web3modal", "Web3Modal"],
                ["https://docs.ethers.io/v5/", "Ethers"],
                ["https://hardhat.org/", "Hardhat"],
                ["https://sass-lang.com/", "SCSS"],
              ].map((c, i) => (
                <Badge key={i} size="xl" variant="outline">
                  <Anchor href={c[0]}>{c[1]}</Anchor>
                </Badge>
              ))}
            </Group>
          }
        />
        <Hero
          left={
            <Box sx={{ width: "60%" }}>
              <Title order={3}>Contract Example Provided</Title>
              <Text>
                <b>A basic counter contract example is provided</b>. Deploy it to your <code>localhost</code>, and then
                interact with it using your injected wallet.
              </Text>
            </Box>
          }
          right={
            <Box sx={{ width: "30%" }}>
              <Link href="/counter" passHref>
                <Anchor>
                  <Button variant="light" size="xl">
                    Counter Contract Example
                  </Button>
                </Anchor>
              </Link>
            </Box>
          }
        />
        <Hero
          left={
            <Box sx={{ width: "30%" }}>
              <Link href="/mytoken" passHref>
                <Anchor>
                  <Button variant="light" size="xl">
                    ERC-20 Token Contract Example
                  </Button>
                </Anchor>
              </Link>
            </Box>
          }
          right={
            <Box sx={{ width: "60%", textAlign: "right" }}>
              <Title order={3}>ERC-20 Token Example Provided</Title>
              <Text>Deploy a token and interact with it!</Text>
            </Box>
          }
        />
      </>
    </Layout>
  )
}

export default Home
