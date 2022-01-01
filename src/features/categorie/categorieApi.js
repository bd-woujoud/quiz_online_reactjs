import axios from '../../config/axios'
import { apiUrls } from '../../config/requests'


// categorie service

export const categorieService = {

    create: (data) => {

        return axios.post(apiUrls.categories.create, data)

            .then(res => {

                return res
            })
            .catch(err => {
                return err
            })
    },

    // get request

    get: () => {

        return axios.get(apiUrls.categories.get)
            .then(res => {
                return res
            }
            )

            .catch(err => {
                return err
            }
            )
    },

    // delete request

    delete: (id) => {

        return axios.delete(apiUrls.categories.delete + id)
            .then(res => {

                return res
            })
            .catch(err => {
                return err
            })
    },

    //update request

    update(data) {

        return (

            axios.put(apiUrls.categories.update + data.id, data)
                .then(res => {
                    return res
                }
                )
                .catch(err => {
                    return err
                }
                ))
    }

}