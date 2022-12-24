/* eslint-disable @next/next/no-img-element */

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { GrFormClose } from 'react-icons/gr'
import { IconContext } from 'react-icons'
import { useCart } from '../../../context/CartProvider'
import { checkout } from '../../../lib/checkout'

export default function ShoppingCartSlideOver({ open, setCartSliderIsOpen }) {
  const { items, removeItem } = useCart()
  const subTotal = items.reduce((acc, curr) => (acc += curr.unit_amount), 0)

  const handleCheckout = (e) => {
    e.preventDefault()
    checkout(items)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" id="dialogShow" onClose={setCartSliderIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div />
        </Transition.Child>

        <div id="cart">
          <div id="cartHead">
            <div id="cartContent">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel id="diagoPanel">
                  <div id="panelContent">
                    <div id="panelContentBody">
                      <div className="d-flex justify-content-between">
                        <Dialog.Title id="dialogTitle">
                          {' '} Shopping cart {' '}
                        </Dialog.Title>
                        <div className="me-3" id="closeBtn">
                          <IconContext.Provider value={{ size: 24 }}>
                            <button
                              type="button"
                              className="cartBtn"
                              onClick={() => setCartSliderIsOpen(false)}
                            >
                              <GrFormClose />
                            </button>
                          </IconContext.Provider>
                        </div>
                      </div>

                      <div className="mt-1">
                        <div>
                          <ul role="list" id="itemList" className="me-4">
                            {items.map((price) => (
                              <li key={price.id} className="cartItem d-flex mt-2">
                                <div className="itemImg">
                                  <img
                                    src={price.product.images[0]}
                                    alt={price.product.name}
                                    className="itemImgSrc"
                                  />
                                </div>

                                <div className="itemDetails d-flex flex-column flex-grow-1 ms-3">
                                  <h3 className="itemTitle">
                                    <a href={price.product.href}> {price.product.name} </a>
                                  </h3>
                                  <p>Qty 1</p>
                                </div>

                                <div className="itemPrices me-4 d-flex flex-column align-items-center justify-content-start">
                                  <p>
                                    {(price.unit_amount / 100).toLocaleString('en-hk', {
                                      style: 'currency',
                                      currency: 'hkd'
                                    })}
                                  </p>
                                  <button
                                    type="button"
                                    onClick={() => removeItem(price.id)}
                                    className="removeBtn"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="subtotal">
                      <div className="d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p>
                          {(subTotal / 100).toLocaleString('en-hk', {
                            style: 'currency',
                            currency: 'hkd'
                          })}
                        </p>
                      </div>
                      <div className="mt-1">
                        <a
                          onClick={handleCheckout}
                          id="checkoutBtn"
                          className="d-flex align-items-center justify-content-center px-6 py-3"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-3 d-flex justify-content-center text-center">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            id="continueBtn"
                            onClick={() => setCartSliderIsOpen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
