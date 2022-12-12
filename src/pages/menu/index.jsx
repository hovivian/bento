// import Stripe from 'stripe'
// import ProductCard from '../../components/ProductCard'

// export default function Menu({ prices = [] }) {
//   return (
//     <div>
//       <div className="page-header-bg"><h1 className="my-3 p-3 page-header">Menu</h1></div>

//       <div className="categories mt-5 d-flex justify-content-center align-items-center">
//         <button type="button" className="categoriesBtn">Sushi</button>
//         <button type="button" className="categoriesBtn ms-3 me-3">Roll</button>
//         <button type="button" className="categoriesBtn me-3">Sashimi</button>
//         <form id="search-book-form">
//           <input type="text" name="q" id="searchBar" placeholder="Search" />
//           <button type="submit" id="submitSearch" className="ms-2">Search</button>
//         </form>
//       </div>

//       <div className="mb-5 d-flex flex-wrap justify-content-around">
//         {prices.map((price) => (
//           <ProductCard key={price.id} price={price} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export async function getServerSideProps() {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
//   const { data: prices } = await stripe.prices.list({
//     active: true,
//     limit: 36,
//     expand: ['data.product']
//   })

//   return {
//     props: {
//       prices
//     }
//   }
// }

import Stripe from 'stripe'
import ProductCard from '../../components/ProductCard'

export default function Menu({ prices = [] }) {
  console.log(prices)
  return (
    <div>
      <div className="page-header-bg"><h1 className="my-3 p-3 page-header">Menu</h1></div>

      <div className="categories mt-5 d-flex justify-content-center align-items-center">
        <button type="button" className="categoriesBtn">Sushi</button>
        <button type="button" className="categoriesBtn ms-3 me-3">Roll</button>
        <button type="button" className="categoriesBtn me-3">Sashimi</button>
        <form id="search-book-form">
          <input type="text" name="q" id="searchBar" placeholder="Search" />
          <button type="submit" id="submitSearch" className="ms-2">Search</button>
        </form>
      </div>

      <div className="mb-5 d-flex flex-wrap justify-content-around">
        {prices.map((price) => (
          <ProductCard key={price.id} price={price} />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 36,
    expand: ['data.product']
  })

  return {
    props: {
      prices
    }
  }
}
