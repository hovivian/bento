import React from 'react'

export default function LoginForm() {
  return (
    <div id="login-form" className="p-5">
      <form className="input-form">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email-input"
            name="email"
            placeholder="Email"
          />
          <label htmlFor="email-input">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password-input"
            name="password"
            placeholder="Password"
          />
          <label htmlFor="password-input">Password</label>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn login-btn mb-3 m-t-30"
            type="submit"
          >Login</button>
        </div>
      </form>
      <div>
        <p className="text-center mb-0">Don't have an account?</p>
        <p className="text-center">Create an account here</p>
        <p className="text-center">- OR -</p>
      </div>
    </div>
  )
}
