import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllCondidature,selectCondidatures } from '../features/condidature/condidatureSlice'
import Itemlistcond from './Itemlistcond'
import SideBar from '../layouts/SideBar'
import TopBar from '../layouts/TopBar'

function Listcondidature() {

    const condidatures = useSelector(selectCondidatures)

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getAllCondidature())
    }, [])

    return (
        <div>

            <div class="row ">

                <div class="col-2" >
                    <SideBar />
                </div>
                <div class="col-10 ">
                    <TopBar />

                    <div class=" col-md-10 white_shd full margin_bottom_30" style={{ marginLeft: '50px', marginTop: '100px' }}>
                        <div class="full graph_head">
                            <div class="heading1 margin_0">
                                <h2> Tableaux condidature</h2>
                            </div>
                        </div>
                        <div class="full price_table padding_infor_info">

                            <div class="table-responsive-sm">
                                <table class="table table-striped projects">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>name</th>
                                            <th>Lastname</th>
                                            <th>phone</th>
                                            <th>email</th>
                                            <th>cv</th>
                                            <th>validate</th>
                                            <th>statut</th>
                                            <th>score</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            condidatures.map((c, i) => {
                                                return (
                                                    <Itemlistcond cond={c} i={i} />

                                                )

                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Listcondidature