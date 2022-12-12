import { useSession } from 'next-auth/react'

export default function Profile() {
  const { data } = useSession()

  return (
    <>
      <div className="page-header-bg"><h1 className="my-3 p-3 page-header"><h2>Profile</h2></h1></div>
      <div className="profile-page d-flex flex-column m-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column top-left-boxes">
            <div className="boxes profile-box profile-box-title mb-3"><h2>Your Profile</h2></div>
            <div className="boxes password-box profile-box-title mb-3"><h2>Your Password</h2></div>
          </div>
          <div className="boxes order-history-box profile-box-title top-right-box mb-3"><h2>Order History</h2></div>
        </div>
        <div className="saved-dishes-box profile-box-title"><h2>Saved dishes</h2></div>
      </div>
    </>
  )
}
