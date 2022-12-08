import nc from '@/controllers/_helpers/nc'
import * as yup from 'yup'
import prisma from '@/controllers/_helpers/prisma'
import handleErrors from '@/controllers/_helpers/handleErrors'
import authenticateUser from '@/controllers/_middlewares/authenticateUser'
import { getSession } from 'next-auth/react'

const createSchema = yup.object({
  name: yup.string()
    .min(6, 'Minimum 6 characters')
    .max(15, 'Maximum 15 characters')
    .required(),
  email: yup.email()
})

const controllersMyProfileCreate = async (req, res) => {
  try {
    const session = await getSession({ req })

    const { body } = req
    const verifiedData = await createSchema.validate(body, { abortEarly: false, stripUnknown: true })

    const newProfile = await prisma.profile.create({
      data: {
        ...verifiedData,
        user: {
          connect: {
            id: session.user.id
          }
        }
      },
      include: {
        user: true
      }
    })

    return res.status(201).json(newProfile)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(authenticateUser)
  .use(controllersMyProfileCreate)
