import LoginForm from '../components/LoginForm'

function LogIn() {
  return (
    <>
      <div className="page-header-bg"><h1 className="my-3 p-3 page-header">Login</h1></div>
      <div className="d-flex justify-content-center mt-5">
        <LoginForm />
      </div>
    </>
  )
}
export default LogIn
