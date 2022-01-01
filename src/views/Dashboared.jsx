
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCategorie, deleteCategory,selectCategories, updateCategorie } from '../features/categorie/categorieSlice'
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineCreate } from 'react-icons/md'
import 'antd/dist/antd.css'
import { Modal } from 'antd';
import GetOffreAdmin from '../components/GetOffreAdmin'


function Dashboared(offre) {

    const [cat, setcat] = useState({})
    const [nomCat, setnomCat] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const categories = useSelector(selectCategories)
    const dispatch = useDispatch()
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const add_Categorie = e => {

        if (e.key === 'Enter') {
            let data = {

                nomCat: nomCat,
            }

            dispatch(createCategorie(data))
            setnomCat('')
        }
    }
      
    
    const handleChange = e => {
        const { name, value } = e.target;
        //setnomCat(e.target.value)
        setcat(prev => ({

            ...prev,
            ['nomCat']: value // ihz donnéé mel input ihotha festate

        }))
    };

    const update_Categorie = (category) => {
        let data = {
            nomCat: cat.nomCat,
            id:cat._id
        }
        dispatch(updateCategorie(data))
        handleCancel()

    }

    return (

        <div>
            <div class='main'>
                <div class='container-fluid'>
                    <div className="row column1 " style={{ marginTop: "50px" }}>
                        <div class="col-md-8">
                            <GetOffreAdmin />
                        </div>

                        {/* categorie get */}
                        <div className="col-md-4 ">
                            <div class="white_shd full margin_bottom_30">
                                <div class="full graph_head">
                                    <div class="heading1 margin_0">
                                        <span> <h2> Categories </h2></span>

                                        <div class="modal-body">
                                            <label for="nomCat" class="col-form-label">New_category</label>
                                            <input onKeyDown={add_Categorie} value={nomCat} onChange={(e) => setnomCat(e.target.value)} type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="table_section padding_infor_info">
                                    <div class="table-responsive-sm">
                                        <table class="table  table-striped">
                                            <tbody>
                                                {
                                                    categories.map((c, i) => {
                                                        return (

                                                            <tr key={c._id} >

                                                                <td class="msg_list"> {c.nomCat} </td>
                                                                <td><MdOutlineCreate onClick={() => { setcat(c); showModal() }} style={{ color: "blue", fontSize: '20px', cursor: 'pointer' }} /></td>
                                                                <td><AiOutlineDelete onClick={() => { dispatch(deleteCategory(c._id) )}} style={{ color: "red", fontSize: '20px', cursor: 'pointer' }} /></td>

                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        <Modal footer={null} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <label for="updatecat" class="col-form-label" style={{ color: 'red' }}>Nom_categorie</label>
                                                    <input onChange={handleChange} value={cat.nomCat} type="text" class="form-control" />
                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary" onClick={() => update_Categorie(cat)}>Enregistrer</button>
                                                </div>
                                            </div>
                                        </Modal>
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


export default Dashboared 
