import { FC } from "react"
import MintBox from "../mint-box"
import MintProgressBar from "../mint-progress-bar"
import Image from "next/image"

const Hero: FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="left">
        <span className="slogan">Catch the winning spirit!</span>
        <div className="title-wrapper">
          <h1 className="title">NFT Lottery</h1>
        </div>
        <h2 className="subtitle">{"Limited offer: don't miss the opportunity to easily win 1 ETH (~2000$)"}</h2> {/* Maybe pull here updated price of 1ETH */}
        <MintProgressBar />
        <div className="buy-ticket-wrapper">
          <h3 className="buy-ticket-title">Buy your win ticket</h3>
          <MintBox />
        </div>
      </div>
      <div className="right">
      <Image 
        src="/assets/hero-ticket.png" 
        width={283} 
        height={552} 
        alt="Lottery Ticket"
      />
      </div>
    </section>
  )
}

export default Hero
