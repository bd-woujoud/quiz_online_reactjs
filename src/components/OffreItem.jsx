
import React from 'react'
import { BiCategory, BiMap } from 'react-icons/bi'
import { FaFileContract } from 'react-icons/fa'
import { FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'
import Post from './Post'


function OffreItem({ offre }) {

 
    return (

        <div>

            <div className="full price_table padding_infor_info">
                <div className="row">
                    <div className=" col-md-12 col-s-6   margin_bottom_10">
                        <div className="contact_blog">
                          
                            <div className="contact_inner">
                                <div className="left">
                                    <h3>{offre.title}</h3>

                                </div>
                                <div className="bottom-right">

                                    {<Post offre={offre} />}

                                   
                                </div>
                                <div className="bottom_list">
                                    {offre.description}
                                    <hr></hr>

                                    <div className="container">
                                        <div class="row">
                                            <div class="col-md-3 col-sm-3 col-3" >

                                                <BiCategory className='icons' />
                                                <span>{offre.categorie.nomCat}</span>

                                            </div>

                                            <div class="col-md-3 col-sm-3 col-3" >
                                                <FaFileContract className='icons' />
                                                <span>{offre.contrat}</span>
                                            </div>

                                            <div class="col-md-3 col-sm-3 col-3">
                                                <BiMap className='icons' />
                                                <span>{offre.ville}</span>
                                            </div>

                                            <div class="col-md-3 col-sm-3 col-3">
                                                <FaRegCalendarAlt className='icons' />
                                                <span>{moment(offre.createdAt).format('DD-MM-YYYY')}</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OffreItem

