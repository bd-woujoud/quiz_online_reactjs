import React, { useEffect } from 'react'
import { Row, Col, Divider } from 'antd';
import { createQcm, getQcm, SelectCreate, SelectCreateStatus } from '../features/qcm/qcmSlice'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../features/categorie/categorieSlice';
import { useState } from 'react';
import { Modal } from 'antd'

const AddQcm = () => {


  const getCat = useSelector(selectCategories)
  const createStatus = useSelector(SelectCreateStatus)

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

  const dispatch = useDispatch()
  const [question, setQuestion] = useState()
  const [categorie, setCategorie] = useState()
  const [alert, setAlert] = useState(false)
  const [alertf, setAlertf] = useState(false)
  // const error = useSelector(SelectError)

  const [rep1, setRep1] = useState('')
  const [rep2, setRep2] = useState('')
  const [rep3, setRep3] = useState('')


  const [rad1, setRad1] = useState(false)
  const [rad2, setRad2] = useState(false)
  const [rad3, setRad3] = useState(false)


  useEffect(() => {

    if (createStatus === 'success') {
      setRad1("false")
      setRad2("false")
      setRad3("false")


      setRep1(" ")
      setRep2(" ")
      setRep3(" ")

      setAlert(true)
      setTimeout(() => {
        setAlert(false)
        handleCancel()
      }, 3000);
    }


    if (createStatus === 'failure') {
      setAlertf(true)
      setTimeout(() => {
        setAlertf(false)


      }, 3000);


    }
  }, [createStatus])


  const ajout_Qcm = () => {


    let data = {

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

        },

      ]

    }

    dispatch(createQcm(data));




  }



  return (
    <div>

      <span class="plus_green_bt" onClick={showModal} style={{ cursor: 'pointer' }}>+</span>

      <Modal footer={null} title="créer un nouveau QCM" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
        <div class="modal-body" >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <div >
                {alert && <div class="alert alert-success" role="alert">
                  Succes Create
                </div>
                }
                {alertf && <div class="alert alert-danger" role="alert">
                  Error create
                </div>
                }
                <input type="text" class="form-control" onChange={e => setQuestion(e.target.value)} placeholder="QUESTION" />

              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div >
                <select class="form-select" aria-label="Disabled select example" onChange={e => setCategorie(e.target.value)}>
                  <option selected>Categorie</option>
                  {
                    getCat.map((c, i) => {

                      return (

                        <option value={c._id} >{c.nomCat}
                        </option>

                      )
                    })
                  }


                </select>

              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div >

              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12} offset={6}>
              <div>
                <div className="input-group">
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" name="reponse" type="radio" aria-label="Radio button for following text input" onChange={e => setRad1(e.target.checked)} />
                  </div>
                  <input type="text" className="form-control" placeholder="Reponse 1" aria-label="Text input with radio button" onChange={e => setRep1(e.target.value)} />
                </div>
              </div>
              <br />
              <div>
                <div className="input-group">
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" name="reponse" type="radio" aria-label="Radio button for following text input" onChange={e => setRad2(e.target.checked)} />
                  </div>
                  <input type="text" name="reponse" className="form-control" placeholder="Reponse 2" aria-label="Text input with radio button" onChange={e => setRep2(e.target.value)} />
                </div>
              </div>
              <br />

              <div>
                <div className="input-group">
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" name="reponse" type="radio" aria-label="Radio button for following text input" onChange={e => setRad3(e.target.checked)} />
                  </div>
                  <input type="text" className="form-control" placeholder="Reponse 3" aria-label="Text input with radio button" onChange={e => setRep3(e.target.value)} />
                </div>
              </div>
              <br />

              <div>

              </div><br /><br />
              <button type="button" class="btn btn-danger btn-lg" onClick={ajout_Qcm}>Create</button>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>


  )
}

export default AddQcm
