import LoginForm from '../components/LoginForm'

function Signup() {
  return (
    <>
      <div className="page-header-bg"><h1 className="my-3 p-3 page-header">Sign Up</h1></div>
      <div className="d-flex justify-content-center mt-5">
        <LoginForm />
      </div>
    </>
  )
}
export default Signup
