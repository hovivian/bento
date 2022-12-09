/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { RiHeartLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { useCart } from '../../context/CartContext'

const ProductCard = ({ price }) => {
  const { items, addItem } = useCart()
  const [error, setError] = useState('')
  const { product, unitAmount } = price

  const addItemToCart = (price) => {
    const found = items.find((p) => p.id === price.id)
    if (found) {
      setError('Item has been added!')
      return
    }
    addItem(price)
  }

  useEffect(() => {
    const timeout = setTimeout(() => setError(''), 3000)
    return () => clearTimeout(timeout)
  }, [error])

  return (
    <div className="products m-1">
      <img
        src={product.images[0]}
        alt={product.name}
        className="productImg"
      />
      <div className="productCard bg-white p-3 d-flex justify-content-around">
        <div className="productCard-left d-flex flex-column w-75">
          <div className="productName mt-4">
            <h3>{product.name}</h3>
          </div>
          <div className="productPrice">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            <p className="relative text-lg font-semibold">
              {(unitAmount / 100).toLocaleString('en-CA', {
                style: 'currency',
                currency: 'HKD'
              })}
            </p>
          </div>
        </div>
        <IconContext.Provider value={{ size: 30 }}>
          <div className="productBtn d-flex flex-column justify-content-between align-items-center">
            <button
              onClick={() => addItemToCart(price)}
              className="btn text-center"
              type="button"
            >
              <RiHeartLine />
            </button>
            <button
              onClick={() => addItemToCart(price)}
              className="btn addToCartBtn text-center"
              type="button"
            >
              +
            </button>
            {error && <p className="text-sm text-red-400">{error}</p>}
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default ProductCard
