
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/authenticationSlice'

function Login() {

  const [email, setemail] = useState('')

  const [password, setpassword] = useState('')

  const dispatch = useDispatch()


  const loginuser = (e) => {

    e.preventDefault();

    let data = {

      email: email,
      password: password

    }

    dispatch(login(data))
  }


  return (
    <div>

      <div className="full_container" style={{ backgroundColor: '#eee' }}>
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login">
              </div>
              <div className="login_form">
                <form onSubmit={loginuser}>
                  <fieldset>
                    <div className="field">
                      <label className="label_field">Email Address</label>
                      <input value={email} onChange={(e) => setemail(e.target.value)} type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div className="field">
                      <label className="label_field">Password</label>
                      <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="field margin_0">
                      <label className="label_field hidden">hidden label</label>
                      <button className="main_bt"   >Sing In</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
