// import Stripe from 'stripe'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// const handler = async (req, res) => {
//   if (req.method === 'POST') {
//     try {
//       const { lineItems } = req.body
//       if (!lineItems.length) {
//         return res.status(400).json({ error: 'Bad Request!' })
//       }

//       const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: `${req.headers.origin}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
//         cancel_url: req.headers.origin
//       })

//       return res.status(201).json({ session })

//       // If using HTML forms you can redirect here
//       // return res.redirect(303, session.url)
//     } catch (e) {
//       return res.status(e.statusCode || 500).json({ message: e.message })
//     }
//   }

//   res.setHeader('Allow', 'POST')
//   res.status(405).end('Method Not Allowed')
// }

// export default handler

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: req?.body?.items ?? [],
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/menu`
      })

      res.status(200).json(session)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
