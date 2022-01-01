import React from 'react'
import SideBar from '../layouts/SideBar'
import Contente from '../layouts/Contente'

function Landing() {

    return (

        <div>
            <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBar/>
                        <Contente/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing
