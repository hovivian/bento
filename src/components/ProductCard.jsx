/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { RiHeartLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { toast } from 'react-toastify'
import { useCart } from '../../context/CartContext'

const ProductCard = ({ price }) => {
  const { items, addItem } = useCart()
  const [error, setError] = useState('')
  const { product, unit_amount } = price

  const addItemToCart = (price) => {
    const found = items.find((p) => p.id === price.id)
    if (found) {
      toast.success('item has been added!')
      return
    }
    addItem(price)
  }

  // const saveToFavorite = (product) => {
  //   const found = items.find((p) => p.id === price.id)
  //   if (found) {
  //     toast.success('item has been saved!')
  //     return
  //   }
  //   saveItem(price)
  // }

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
            />
            <p className="relative text-lg font-semibold">
              {(unit_amount / 100).toLocaleString('en-hk', {
                style: 'currency',
                currency: 'hkd'
              })}
            </p>
          </div>
        </div>
        <IconContext.Provider value={{ size: 30 }}>
          <div className="productBtn d-flex flex-column align-items-center">
            <button
              onClick={() => saveToFavorite(product)}
              className="btn text-center favoriteBtn"
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
