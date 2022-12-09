import Stripe from 'stripe'
import ProductCard from '../../components/ProductCard'

const Menu = ({ prices = [] }) => (
  <>
    <div className="page-header-bg"><h1 className="my-3 p-3 page-header">Menu</h1></div>

    <div className="mb-5 d-flex flex-wrap justify-content-around">
      {prices.map((price) => (
        <ProductCard key={price.id} price={price} />
      ))}
    </div>
  </>
)

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 20,
    expand: ['data.product']
  })

  return {
    props: {
      prices
    }
  }
}

export default Menu
