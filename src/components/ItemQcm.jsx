import React, { useState, useEffect } from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri';
import { HiPencilAlt } from 'react-icons/hi';
import { deleteQcm, getQcm, updateQcm } from '../features/qcm/qcmSlice'
import { useDispatch } from 'react-redux'
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categorie/categorieSlice';


function ItemQcm({ q, i }) {


  const [question, setQuestion] = useState(q.question)
  const [categorie, setCategorie] = useState(q.categorie)
  const [rep1, setRep1] = useState(q.reponses[0].text)
  const [rep2, setRep2] = useState(q.reponses[1].text)
  const [rep3, setRep3] = useState(q.reponses[2].text)
  const [rad1, setRad1] = useState(q.reponses[0].isCorrect)
  const [rad2, setRad2] = useState(q.reponses[1].isCorrect)
  const [rad3, setRad3] = useState(q.reponses[2].isCorrect)
  const [Id, setId] = useState(q._id)
  const getCat = useSelector(selectCategories)
  const [qcm, setQcm] = useState({})
  const [visible, setVisible] = React.useState(false);

  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    //update_Qcm(q._id)
    setTimeout(() => {
      setVisible(false);
    }, 2000);

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const Delete_Qcm = (id) => {
    dispatch(deleteQcm(id))
    dispatch(getQcm())
  }

  const update_Qcm = (q) => {

    let data = {
      id: Id,
      data: {

        question: question,
        categorie: categorie,
        reponses: [
          {
            text: rep1,
            isCorrect: rad1

          },
          {
            text: rep2,
            isCorrect: rad2

          },
          {
            text: rep3,
            isCorrect: rad3

          }


        ]
      }
    }
    dispatch(updateQcm(data))
    dispatch(getQcm())
    handleOk()
  }


  return (
    <>
      <tr>
        <td>{ }</td>
        <td>{q._id}</td>
        <td>{q.question}</td>
        <td>{q.categorie.nomCat}</td>
        <td ><RiDeleteBin2Line onClick={() => { Delete_Qcm(q._id) }} style={{ color: "red", fontSize: '20px', cursor: 'pointer' }} /></td>
        <td><HiPencilAlt onClick={() => { setQcm(q._id); showModal() }} style={{ color: "blue", fontSize: '20px', cursor: 'pointer' }} /></td>
      </tr>
      

      <Modal title="Modifier QCM"   footer={null} visible={isModalVisible} onOk={handleOk}  onCancel={handleCancel} style={{ height: '500px', widh: '500px' }} >
     
        <div class="modal-body" style={{height:'400px'}}>

          <div class="form-group" style={{ height: '50px' ,marginTop:'10px'}}>

            <input style={{ height: '50px', color: 'black', fontSize: '15px' }} value={question} onChange={e => setQuestion(e.target.value)} type="text" class="form-control" placeholder='remplir question' />

          </div>

          <div class="form-group" style={{ height: '50px', margin: '30px' }}>

            <select name='categorie' onChange={e => setCategorie(e.target.value)} class="form-control" style={{ height: '50px', color: 'black', fontSize: '15px' }} >

              <option value={''}>select category</option>
              {
                getCat.map((c, i) => {

                  return (


                    <option selected={q.categorie._id === c._id ? true : false} value={c._id} >{c.nomCat}

                    </option>

                  )
                })
              }

            </select>
            <div class="form-group" style={{ height: '50px', margin: '30px' }}>
            <div className="input-group" style={{ height: '50px', marginTop:'30px'}}>
              <div className="input-group-text">
                <input className="form-check-input mt-0" name="reponse" type="radio" aria-label="Radio button for following text input" checked={rad1} onChange={e => setRad1(e.target.checked)} />
              </div>
              <input type="text" className="form-control" placeholder="Reponse 1" aria-label="Text input with radio button" value={rep1} onChange={e => setRep1(e.target.value)} />
            </div>

            <div className="input-group" style={{ height: '50px', marginTop:'30px'}}>
              <div className="input-group-text">
                <input className="form-check-input mt-0" name="reponse" type="radio" aria-label="Radio button for following text input" value={e => e.target.checked ? false : true} checked={rad2} onChange={e => setRad2(e.target.value)} />
              </div>
              <input type="text" className="form-control" placeholder="Reponse 2" aria-label="Text input with radio button" value={rep2} onChange={e => setRep2(e.target.value)} />
            </div>

            <div className="input-group" style={{ height: '50px', marginTop:'30px'}}>
              <div className="input-group-text">
                <input className="form-check-input mt-0" name="reponse" type="radio" aria-label="Radio button for following text input" checked={rad3} onChange={e => setRad3(e.target.checked)} />
              </div>
              <input type="text" className="form-control" placeholder="Reponse 1" aria-label="Text input with radio button" value={rep3} onChange={e => setRep3(e.target.value)} />
            </div>
</div>
          </div>
       </div>    
          <div class="modal-footer">
       
        <button type="button" class="btn btn-primary" onClick={update_Qcm}>Save changes</button>
     
</div>

      </Modal>


    </>
  )
}

export default ItemQcm
