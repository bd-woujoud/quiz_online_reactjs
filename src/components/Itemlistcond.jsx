import React from 'react'
import { BiCheckDouble } from 'react-icons/bi'
import { FaRegFilePdf } from 'react-icons/fa'
import { GrSend } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { getAllCondidature } from '../features/condidature/condidatureSlice'
import { createTest } from '../features/testt/testSlice'

function Itemlistcond({ cond, i }) {

    const dispatch = useDispatch()

    const create_Test = () => {

        let data = {
            category: cond.offre.categorie,
            condidature: cond._id,
            to: cond.email
        }
    
        dispatch(createTest(data))
        dispatch(getAllCondidature())

    }

    return (

        <tr>
            <td>{i + 1}</td>
            <td>{cond.name}</td>
            <td>{cond.lastname}</td>
            <td>{cond.phone}</td>
            <td>{cond.email}</td>
            {/* target='_blank' lien nekliki alih yethal fi onglet jdida*/}
            <td> <a href={'http://localhost:5000/file/' + cond.cv} target='_blank' ><FaRegFilePdf style={{ fontSize: '15px' }} /></a></td>
            <td>
                {
                    cond.test
                        ?
                        <BiCheckDouble style={{ fontSize: '25px', color: 'green' }} />
                        :
                        <GrSend onClick={create_Test} style={{ cursor: 'pointer', fontSize: '20px' }} />
                }
            </td>
            <td>
                {
                    cond.test && cond.test.isvalid
                        ?
                        <p>passée</p>
                        :
                        <p>not yet</p>
                }
            </td>

            <td> {cond.test ? <>

                {cond.test && cond.test.isvalid ?

                    cond.test.score > 4 ? <button type="button" class="btn btn-secondary " style={{ color: 'green', cursor: 'default' }} >Success</button>
                        :
                        <button type="button" class="btn btn-danger " style={{ fontSize: '15px', cursor: 'default' }}>failure</button>
                    :
                    <button type="button" class="btn btn-secondary " style={{ fontSize: '15px', cursor: 'default' }}>en cours</button>


                }</> :
                <p></p>
            }
            </td>
        </tr>

    )
}

export default Itemlistcond
