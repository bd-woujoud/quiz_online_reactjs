import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteQcm, getQcm, getqcm, SelectCreateStatus, SelectDeleteStatus, SelectListQcm, SelectUpdateStatus } from '../features/qcm/qcmSlice'
import AddQcm from './AddQcm'
import ItemQcm from './ItemQcm'
import TopBar from '../layouts/TopBar'
import SideBar from '../layouts/SideBar'

const Listqcm = () => {

    const listq = useSelector(SelectListQcm)
    const createStatus = useSelector(SelectCreateStatus)
    const updateStatus = useSelector(SelectUpdateStatus)
    const deleteStatus = useSelector(SelectDeleteStatus)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getQcm())

    }, [createStatus,deleteStatus,updateStatus])

    return (

        <>
            <div class="row ">

                <div class="col-2" >
                    <SideBar />
                </div>
                <div class="col-10 ">
                    <TopBar />

                    <div class=" container white_shd full margin_bottom_30" style={{ marginLeft: '50px', marginTop: '100px' }}>

                        <div class=" row full graph_head">
                            <div class=" col-md-4 heading1 margin_0 ">
                                <h2> Tableaux QCM </h2>

                            </div>
                            <div class=" col-md-6"></div>
                            <div class=" col-md-2 mb-5">
                                <AddQcm />
                            </div>
                        </div>
                        <div class="full price_table padding_infor_info">

                            <div class="table-responsive-sm">
                                <table class="table table-striped projects">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>id</th>
                                            <th>question</th>
                                            <th>categorie</th>
                                            <th>Supprimer</th>
                                            <th>Modifier</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            listq.map((c, i) => {
                                                return (
                                                    <ItemQcm key={c._id} q={c} />

                                                )

                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>


                </div></div>



        </>
    )
}

export default Listqcm
