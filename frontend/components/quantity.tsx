import { FC, useState } from "react"


const Quantity: FC = () => {
  const INITIAL_COST = 0.02;
  const [quantity, setQuantity] = useState(1)


  const increase = () => {
    setQuantity(quantity + 1)

  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)

    }
    
  }

  return (
    <div className="quantity-wrapper">
      <div className="quantity">
        <button type="button" onClick={decrease}>
          <svg width="25" height="2" viewBox="0 0 25 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.2 1H1.59998" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="current-value">{quantity}</span>
        <button type="button" onClick={increase}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4 23.2V12.4M12.4 12.4V1.6M12.4 12.4H23.2M12.4 12.4H1.59998" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      <div className="cost">{quantity * INITIAL_COST} ETH</div>
    </div>
    
    )
}

export default Quantity
