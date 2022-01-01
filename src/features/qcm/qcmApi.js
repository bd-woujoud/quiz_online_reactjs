import axios from '../../config/axios'
import { apiUrls } from '../../config/requests'


// qcm service

export const qcmService = {

    // create

    createqcm: (data) => {

        return axios.post('http://localhost:5000/qcms/add', data)
            .then(res => {
                return res
            }
            )

            .catch(err => {
                return err
            }
            )
    },
    //get
    getqcm: () => {
        return axios.get(apiUrls.qcms.get)
            .then(res => {
                return res
            }
            )

            .catch(err => {
                return err
            }
            )
    },
    update(data) {
        return (
            axios.put(apiUrls.qcms.update + data.id, data.data)
                .then(res => {
                    return res
                }
                )

                .catch(err => {
                    return err
                }
                ))


    },
    deleteqcm(id) {

        return (
            axios.delete(apiUrls.qcms.delete + id)
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