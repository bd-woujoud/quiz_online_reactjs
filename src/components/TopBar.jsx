import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/user/authenticationSlice'

function TopBar() {

  const dispatch = useDispatch()

  return (
    <div>


      <div className="topbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="full">


            <div className="right_topbar">
              <div className="icon_info">

                <ul className="user_profile_dd">
                  <li>
                    <a className="dropdown-toggle" data-toggle="dropdown"><span className="name_user">Admin</span></a>
                    <div className="dropdown-menu">

                      <a className="dropdown-item" href="#" onClick={() => dispatch(logout())} ><span>Log Out</span> <i className="fa fa-sign-out" /></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>



    </div>
  )
}

export default TopBar
