import { FC } from "react"

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="left">
        <span className="slogan">Catch the winning spirit!</span>
        <h1 className="title">NFT Lottery</h1>
        <h2 className="subtitle">Limited offer: don't miss the opportunity to easily win 1 ETH (~2000$)</h2>
        {/* Stock progress bar component */}
        <div className="buy-ticket-wrapper">
          <h3 className="buy-ticket-title">Buy your win ticket</h3>
          {/* Mint block component */}
        </div>
      </div>
      <div className="right">
        <div className="image"></div>
      </div>
    </section>
  )
}

export default Hero
