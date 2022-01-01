import React, { useEffect, useState } from 'react'
import { BsPencilSquare} from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import {deleteOffre, getAllOffre, selectAddOffre,selectDeleteOffre, selectErorrStatus, selectOffres, selectUpdateOffre,  updateOffre} from '../features/offre/offreSlice'
import moment from 'moment'
import CreateOffreItem from './CreateOffreItem'
import { selectCategories} from '../features/categorie/categorieSlice'
import { Modal} from 'antd';
import { cities, contrats } from '../mocks/cities'
import 'react-toastify/dist/ReactToastify.css';

function GetOffreAdmin(offre) {

    const addOffre = useSelector(selectAddOffre)
    const offres = useSelector(selectOffres)
    const deleteOffree = useSelector(selectDeleteOffre)
    const categories = useSelector(selectCategories)
    const error = useSelector(selectErorrStatus)
    const [offreUpdate, setOffreUpdate] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [alert, setalert] = useState(false)
    const [alertf, setalertf] = useState(false)
    const statusUpdate = useSelector(selectUpdateOffre)
    const dispatch = useDispatch()
    
    const showModal = (id) => {
        
        setIsModalVisible(true);
        setOffreUpdate(offres.find(o => o._id === id))
        
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const update_Offre = () => {
        
        let data = {
            title: offreUpdate.title,
            description: offreUpdate.description,
            Categorie: offreUpdate.Categorie,
            contrat: offreUpdate.contrat,
            ville: offreUpdate.ville,
            id: offreUpdate._id
        }

    
        dispatch(updateOffre(data))
        handleOk () 
    };
    


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    
    
    const handlechange = e => {
        const { value, name } = e.target
        setOffreUpdate(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    
    useEffect(() => {
        
        if( statusUpdate === 'success') {
            let dat = {
                
                keyword: ""
            }
            dispatch(getAllOffre(dat))
            handleCancel()
            
        }
    }, [statusUpdate])
    
        useEffect(() => {
    
            let dat = {
    
                keyword: ""
            }
    
            dispatch(getAllOffre(dat))
    
        }, [addOffre, deleteOffree])
    
    
    return (
        <div>
            <div class="dash_blog">
                <div class="dash_blog_inner">
                    <div class="dash_head">
                        <h3 style={{ color: 'black' }}><span><i class="fa fa-reorder"></i> Offres</span><CreateOffreItem /></h3>
                    </div>
                    <div class="list_cont">
                        <p>Tableau des Offres</p>
                    </div>
                    <div class="table-responsive-sm">
                        <table class="table table-striped projects">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Title</th>
                                    <th>Categorie</th>
                                    <th>contrat</th>
                                    <th>Ville</th>
                                    <th>Date_Publication</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >

                                {
                                    offres.map((o, i) => {

                                        return (
                                            <tr  >
                                                <td>{o.title}</td>
                                                <td>{o.categorie.nomCat}</td>
                                                <td>{o.contrat}</td>
                                                <td>{o.ville}</td>
                                                <td>{moment(o.createdAt).format('DD-MM-YYYY')}</td>
                                                <td><BsPencilSquare onClick={() => showModal(o._id)} style={{ color: 'blue', fontSize: '20px', marginRight: '30px', cursor: 'pointer' }} />
                                                    <TiDeleteOutline onClick={() => { dispatch(deleteOffre(o._id)) }} style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal title="update"  footer={null} visible={isModalVisible} onOk={handleOk}  onCancel={handleCancel}>
                {/* form for update */}

                <br />
                <form >
                    {alert && <div class="alert alert-success" role="alert">
                        {addOffre}
                    </div>
                    }
                    {alertf && <div class="alert alert-danger" role="alert">
                        {error}
                    </div>
                    }
                    <div class="form-group" style={{ height: '50px' }}>

                        <input name='title' style={{ height: '50px', color: 'black', fontSize: '15px' }} value={offreUpdate ? offreUpdate.title : ''} onChange={handlechange} type="text" class="form-control" placeholder='Title' />

                    </div>

                    <div class="form-group" style={{ height: '50px' }}>

                        <input name='description' style={{ height: '50px', color: 'black', fontSize: '15px' }} value={offreUpdate ? offreUpdate.description : ''} onChange={handlechange} type="text" class="form-control" placeholder='description' />

                    </div>

                    <div class="form-group" style={{ height: '50px' }}>

                        <select name='categorie' onChange={handlechange} class="form-control" style={{ height: '50px', color: 'black', fontSize: '15px' }} >

                            <option value={offreUpdate ? offreUpdate.categorie : ''}>{offreUpdate ? offreUpdate.categorie.nomCat : ''}</option>
                            {
                                categories.map((c, i) => {
                                    return (
                                        <option key={i} value={c._id}>{c.nomCat}</option>
                                    )
                                })
                            }

                        </select>
                    </div>

                    <div class="form-group" style={{ height: '50px' }}>

                        <select name='contrat' onChange={handlechange} class="form-control" style={{ height: '50px', color: 'black', fontSize: '15px' }}>
                            <option value={offreUpdate ? offreUpdate.contrat : ''}>{offreUpdate ? offreUpdate.contrat : ''}</option>
                            {
                                contrats.map((c, i) => {
                                    return (
                                        <option key={i} value={c}>{c}</option>
                                    )
                                })
                            }

                        </select>
                    </div>
                    <div class="form-group" style={{ height: '50px' }}>

                        <select name='city' onChange={handlechange} class="form-control" style={{ height: '50px', color: 'black', fontSize: '15px' }}>
                            <option value={offreUpdate ? setOffreUpdate.ville : ''}>{offreUpdate ? offreUpdate.ville : ''}</option>
                            {
                                cities.map((c, i) => {
                                    return (
                                        <option key={i} value={c}>{c}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </form>
                <div class="modal-footer" >
                    <button type="button" class="btn btn-primary" onClick={update_Offre} >Modifier</button>
                </div>

            </Modal>
        </div>
    )
}

export default GetOffreAdmin
