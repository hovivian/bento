import Image from 'next/image'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { ImTruck } from 'react-icons/im'
import { SiHellofresh } from 'react-icons/si'
import { IconContext } from 'react-icons'
import Stripe from 'stripe'
import Link from 'next/link'
import kv from '../../public/assets/images/kv.png'
import ProductCard from '../components/ProductCard'

export default function Home({ prices = [] }) {
  return (
    <div className="home">
      <div className="home-top d-flex">
        <div className="d-flex flex-column w-50 justify-content-center top-left-boxes">
          <h1>Enjoy quality <span>sushi</span></h1>
          <h1> delivered at your door!</h1>
          <button id="order-btn" type="button"><Link href="/menu">Order Now</Link></button>
        </div>
        <div className="w-50 d-flex justify-content-end">
          <Image src={kv} width="600" height="400" alt="kv" />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-center">Why Bento?</h2>
        <IconContext.Provider value={{ size: 150 }}>
          <div className="home-features d-flex row mt-5">
            <div className="features col text-center d-flex flex-column align-items-center">
              <ImTruck />
              <h2 className="mt-4">Same Day Delivery</h2>
            </div>
            <div className="features col text-center d-flex flex-column align-items-center">
              <SiHellofresh />
              <h2 className="mt-4">Freshly Sourced</h2>
            </div>
            <div className="features col text-center d-flex flex-column align-items-center">
              <BsFillCreditCard2BackFill />
              <h2 className="mt-4">Easy Checkout</h2>
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <div className="mt-5">
        <h2 className="text-center">Hot Picks</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {prices.map((price) => (
            <ProductCard key={price.id} price={price} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 4,
    expand: ['data.product']
  })

  return {
    props: {
      prices
    }
  }
}
