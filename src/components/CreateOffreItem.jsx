

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../features/categorie/categorieSlice';
import { createOffre, selectAddOffre, selectErorrStatus } from '../features/offre/offreSlice'
import { cities, contrats } from '../mocks/cities'
import { Modal } from 'antd'
import { toast } from "react-toastify";
function CreateOffreItem(offre) {

    const error = useSelector(selectErorrStatus)
    const addOffre = useSelector(selectAddOffre)
    const categories = useSelector(selectCategories)
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [categorie, setcategorie] = useState('')
    const [contrat, setcontrat] = useState('')
    const [ville, setville] = useState('');
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const create_Offre = () => {

        let data = {

            title: title,
            description: description,
            ville: ville,
            contrat: contrat,
            categorie: categorie

        }

        dispatch(createOffre(data))
        handleOk()
    }


    useEffect(() => {
        if (addOffre === 'success') {
            setdescription('')
            settitle('')
            setcontrat('')
            setcategorie('')
            
            setTimeout(() => {

            }, 3000);
        }

    }, [addOffre])

    return (

        <>
            <span class="plus_green_bt" onClick={showModal} style={{ cursor: 'pointer' }}>+</span>

            <Modal footer={null} title="Ajouter une nouvelle offre d'emploi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

                <div class="modal-body" >
                    <form >
                       
                        <div class="form-group" style={{ height: '50px' }}>

                            <input style={{ height: '50px', color: 'black', fontSize: '15px' }} value={title} onChange={(e) => settitle(e.target.value)} type="text" class="form-control" placeholder='Title' />

                        </div>

                        <div class="form-group" style={{ height: '50px' }}>

                            <input style={{ height: '50px', color: 'black', fontSize: '15px' }} value={description} onChange={(e) => setdescription(e.target.value)} type="text" class="form-control" placeholder='description' />

                        </div>

                        <div class="form-group" style={{ height: '50px' }}>

                            <select name='categorie' onChange={e => setcategorie(e.target.value)} class="form-control" style={{ height: '50px', color: 'black', fontSize: '15px' }} >

                                <option value={''}>select category</option>
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

                            <select name='contrat' onChange={e => setcontrat(e.target.value)} class="form-control" style={{ height: '50px', color: 'black', fontSize: '15px' }}>
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

                            <select name='city' onChange={e => setville(e.target.value)} class="form-control" style={{ height: '50px', color: 'black', fontSize: '15px' }}>
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
                </div>

                <div class="modal-footer" >
                    <button type="button" class="btn btn-primary" onClick={create_Offre} >Ajouter</button>
                </div>


            </Modal>

        </>
    )
}

export default CreateOffreItem
