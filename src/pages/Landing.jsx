import React from 'react'
import Contente from '../components/Contente'
import SideBar from '../components/SideBar'

function Landing() {
    return (
        <div>
            <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBar />
                        <Contente/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing
