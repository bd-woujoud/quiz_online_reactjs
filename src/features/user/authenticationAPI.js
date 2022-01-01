
import axios from '../../config/axios'
import { apiUrls } from '../../config/requests'


// authentication service

export const AuthenticationService = {

    // login request

    login: (data) => {

        return axios.post(apiUrls.authentication.login, data , {credentials : 'include'} )
            .then(res => {
                return res
            }
            )

            .catch(err => {
                return err
            }
            )

    },

    // login request

    logout: (data) => {

        return axios.post(apiUrls.authentication.logout, data)
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