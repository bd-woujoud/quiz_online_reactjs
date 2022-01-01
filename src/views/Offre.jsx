import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOffre, selectOffres } from '../features/offre/offreSlice'
import { selectCategories} from '../features/categorie/categorieSlice'
import OffreItem from '../components/OffreItem'
import {  selectRegisterStatus } from '../features/condidature/condidatureSlice'

function Offre() {

    const offres = useSelector(selectOffres)
    const status = useSelector(selectRegisterStatus)
    const categories = useSelector(selectCategories)
    const [search, setsearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {

        let dat = {
            keyword: search
        }

        dispatch(getAllOffre(dat))

    }, [search,status])


    return (
        <div>
            <div className="inbox-head">

                <form action="#" className="center  search_inbox">
                    <div className="input-append">
                        <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} className="sr-input" placeholder="Search... " />
                        <button className="btn sr-btn" type="button"><i className="fa fa-search" /></button>
                    </div>
                </form>
            </div>

            <div className="row column1 " style={{ marginTop: "50px" }}>
                <div className="col-md-1"></div>

                <div className="col-md-8">
                    <div className=" full margin_bottom_30">

                        <div className="row column1">
                            <div className="col-md-12">
                                <div className="white_shd full margin_bottom_30">
                                    <div className="full graph_head">
                                        <div className="heading1 margin_0">
                                            <h2><b>Liste des offres</b></h2>
                                        </div>
                                    </div>

                                    {
                                        offres.map((o, i) => {
                                            return (
                                                < OffreItem key={o._id} offre={o} />
                                            )
                                        })

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 pl-2">
                    <ul className="nav nav-pills nav-stacked labels-category inbox-divider">

                        <h4>Categories</h4>
                        {
                            categories.map((c, i) => {

                                return (

                                    <li><a href="#"><i className="fa fa-circle" /> {categories[i].nomCat}</a>
                                    </li>

                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Offre
