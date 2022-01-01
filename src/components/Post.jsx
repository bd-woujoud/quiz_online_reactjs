import React, { useEffect, useState } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import {createCondidature, selectErorrStatus, selectRegisterStatus} from '../features/condidature/condidatureSlice'
import { useDispatch, useSelector } from 'react-redux';


const Post = ({offre}) => {

  const status = useSelector(selectRegisterStatus)
  const error = useSelector(selectErorrStatus)
  const [name, setname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [cv, setcv] = useState(null);
  const [alert, setalert] = useState(false)
  const [alertf, setalertf] = useState(false)

  const errors = useSelector(state => state.condidatures.errors)

  useEffect(() => {
    if (status === 'success') {
      setlastname('')
      setname('')
      setphone('')
      setemail('')
        setalert(true)
        setTimeout(() => {
            setalert(false)

        }, 3000);
      }
        
    
    if (status === 'failure') {
      setalertf(true)
      setTimeout(() => {
          setalertf(false)

      }, 3000);
       
  }
},[status])


  const dispatch = useDispatch()
 
  const handlePost = (e) => {
    e.preventDefault();

    let d = new FormData()

    d.append('name', name)
    d.append('lastname', lastname)
    d.append('phone', phone)
    d.append('email', email)
    d.append('pdf', cv)
    d.append('offre', offre._id)
    
    dispatch(createCondidature(d))
  }
  
    return (
        <>
        
        <button type="button" className="btn btn-primary btn-xs mr-3" data-toggle="modal" data-target="#postmodal" data-whatever="@mdo" >Postuler < RiSendPlaneFill/></button>

        <div class="modal fade" id="postmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">

              <h5 class="modal-title" id="exampleModalLabel">Postuler Pour {offre.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>

              {alert &&<div class="alert alert-success" role="alert">
             condidature postulé
                </div>
              }

            {alertf &&<div class="alert alert-danger" role="alert">
           echec
                </div>

            }
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Nom:</label>
                  <input style={{border : errors.find(e => e.path[0] === 'name' ? '1px solid red'  : '')}} value={name} onChange={(e)=>setname(e.target.value)} type="text" class="form-control" />
               <span style={{color : 'red'}} >{errors.find(e => e.path[0] === 'name') ? errors.find( e => e.path[0] === 'name').message : ''  }</span>
                </div>

                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Prenom:</label>
                  <input  style={{border : errors.find(e => e.path[0] === 'lastname' ? '1px solid red'  : '')}} value={lastname} onChange={(e)=>setlastname(e.target.value)} type="text" class="form-control" />
                  <span style={{color : 'red'}} >{errors.find(e => e.path[0] === 'lastname') ? errors.find( e => e.path[0] === 'lastname').message : ''  }</span>

                </div>
               
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Email:</label>
                  <input  style={{border : errors.find(e => e.path[0] === 'email' ? '1px solid red'  : '')}} value={email} onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" />
                  <span style={{color : 'red'}} >{errors.find(e => e.path[0] === 'email') ? errors.find( e => e.path[0] === 'email').message : ''  }</span>

                </div>

                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Phone:</label>
                  <input  style={{border : errors.find(e => e.path[0] === 'phone' ? '1px solid red'  : '')}} value={phone} onChange={(e)=>setphone(e.target.value)} type="text" class="form-control" />
                  <span style={{color : 'red'}} >{errors.find(e => e.path[0] === 'phone') ? errors.find( e => e.path[0] === 'phone').message : ''  }</span>

                </div>

                <div class="input-group mb-3">
            <div class="custom-file">
                <label class="custom-file-label" for="inputGroupFile02">Telecharger Votre CV en PDF</label>
                <input   type="file"  class="custom-file-input"  onChange={(e) => setcv(e.target.files[0])} /><br></br>
            </div>
            
            <span style={{color : 'red'}} >{errors.find(e => e.path[0] === 'cv') ? errors.find( e => e.path[0] === 'cv').message : ''  }</span>
            </div>
              </form>
            </div>
    
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={handlePost}>Postuler</button>
            </div>
          </div>
        </div>
      </div>

      </>
    )
}

export default Post
