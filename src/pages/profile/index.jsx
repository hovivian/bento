// import { getSession } from 'next-auth/react'
// import Head from 'next/head'

// export default function Profile() {
//   return (
//     <>
//       <Head>
//         <title>Profile</title>
//       </Head>

//       <div className="page-header-bg"><h1 className="my-3 p-3 page-header"><h2>Profile</h2></h1></div>
//       <div className="profile-page d-flex flex-column m-4">
//         <div className="d-flex justify-content-between">
//           <div className="d-flex flex-column top-left-boxes">
//             <div className="boxes profile-box profile-box-title mb-3"><h2>Your Profile</h2></div>
//             <div className="boxes password-box profile-box-title mb-3"><h2>Your Password</h2></div>
//           </div>
//           <div className="boxes order-history-box profile-box-title top-right-box mb-3"><h2>Order History</h2></div>
//         </div>
//         <div className="saved-dishes-box profile-box-title"><h2>Saved dishes</h2></div>
//       </div>
//     </>
//   )
// }

// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req })

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/api/auth/signin',
//         premanent: false
//       }
//     }
//   }
//   // authorize user return session
//   return {
//     props: { session }
//   }
// }

/* export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        premanent: false
      }
    }
  }
  // authorize user return session
  return {
    props: { session }
  }
} */

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'

export default function Profile() {
  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <p className="text-4xl font-bold">Please login to access your profile</p>

      <div className="flex justify-center">
        <Link href="/login"><a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Login</a></Link>
      </div>
    </main>
  )
}

function User({ session, handleSignOut }) {
  return (
    <div className="profile-page d-flex flex-column m-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column top-left-boxes">
          <div className="boxes profile-box profile-box-title mb-3"><h2>Your Profile</h2>
            <h5>{session.user.email}</h5>
            <div className="flex justify-center">
              <button type="button" onClick={handleSignOut} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50">Sign Out</button>
            </div>
          </div>
          <div className="boxes password-box profile-box-title mb-3"><h2>Your Password</h2></div>
        </div>
        <div className="boxes order-history-box profile-box-title top-right-box mb-3"><h2>Order History</h2></div>
      </div>
      <div className="saved-dishes-box profile-box-title"><h2>Saved dishes</h2></div>
    </div>
  )
}
