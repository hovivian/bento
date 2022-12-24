// import Stripe from 'stripe'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// const handler = async (req, res) => {
//   if (req.method === 'GET') {
//     try {
//       const { sessionId } = req.query
//       if (!sessionId.startsWith('cs_')) {
//         throw Error('Incorrect Checkout Session ID.')
//       }
//       const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
//         expand: ['payment_intent', 'line_items.data.price.product']
//       })
//       return res.status(200).json(checkoutSession)
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Internal server error'
//       return res.status(500).json({ statusCode: 500, message: errorMessage })
//     }
//   }

//   res.setHeader('Allow', 'POST')
//   res.status(405).end('Method Not Allowed')
// }

// export default handler

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const { id } = req.query

  try {
    if (!id.startsWith('cs_')) {
      throw Error('Incorrect CheckoutSession ID.')
    }
    const checkoutSession = await stripe.checkout.sessions.retrieve(id)

    res.status(200).json(checkoutSession)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
