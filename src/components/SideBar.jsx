import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>


      <nav id="sidebar">
        <div className="sidebar_blog_1">
          <div className="sidebar-header">
            <div className="logo_section">
              <a href="index.html"><img className="logo_icon img-responsive" src="images/logo/logo_icon.png" alt="#" /></a>
            </div>
          </div>
          <div className="sidebar_user_info">
            <div className="icon_setting" />
            <div className="user_profle_side">
              <div className="user_img"><img className="img-responsive" src="images/layout_img/user_img.png" alt="#" /></div>

            </div>
          </div>
        </div>


        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/dash'> <i class="fa fa-briefcase red_color"> </i><span>Offres</span></Link>

            </li>
          </ul>
        </div>




        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/condidature'><i class="fa fa-table blue1_color"></i> <span>Condidatures</span></Link>

            </li>
          </ul>
        </div>
        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
            <Link to='/qcm'><i class="fa fa-object-group yellow_color"></i><span>Qcm</span></Link>

            </li>
          </ul>
        </div>

      </nav>


    </div>
  )
}

export default SideBar
