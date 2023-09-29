import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div>
        <Link to="/product/1">PRODUCT 1</Link>
      </div>
      <div>
        <Link to="/product/2">PRODUCT 2</Link>
      </div>
      <div>
        <Link to="/product/3">PRODUCT 3</Link>
      </div>
    </div>
  )
}

export default Product
