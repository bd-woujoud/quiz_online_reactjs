
import axios from '../../config/axios'
import { apiUrls } from '../../config/requests'


// test service

export const testService = {

    // createrequest

    create: (data) => {

        return axios.post(apiUrls.tests.create ,data)
            .then(res => {
                return res
            }
            )
            .catch(err => {
                return err
            }
            )
    },

    // get request

    testbyid: (id) => {

        return axios.get(apiUrls.tests.getbyid +id)

            .then(res => {
                return res
            }
            )

            .catch(err => {
                return err
            }
            )

    },

    // update request

    update: (data) => {

        return axios.put(apiUrls.tests.update +data.id,/* { score: score, isvalid: true }*/)
            .then(res => {
                return res
            }
            )
            .catch(err => {
                return err
            }
            )
        }
    
}