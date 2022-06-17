import { FC, ReactNode} from "react"
import MintButton from "./buttons/mint-button"
import Quantity from "./quantity"

const MintBox: FC = () => {
  return (
    <div className="mint-box">
      <Quantity />
      <MintButton />
    </div>
  )
}

export default MintBox
