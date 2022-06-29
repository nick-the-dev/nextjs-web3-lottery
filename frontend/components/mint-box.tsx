import { FC, ReactNode } from "react"
import MintButton from "./buttons/mint-button"
import Quantity from "./quantity"

interface MintBoxProps {
  handleMint: any
}

const MintBox: FC<MintBoxProps> = (props: any) => {
  return (
    <div className="mint-box">
      <>
        <Quantity />
        <MintButton {...props} />
      </>
    </div>
  )
}

export default MintBox
