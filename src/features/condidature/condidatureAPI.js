

import axios from '../../config/axios'
import { apiUrls } from '../../config/requests'

export const condidatureService = {


    create: (data) => {

    return axios.post(apiUrls.condidatures.create,data)
        .then(res => {
            return res
        }
        )

        .catch(err => {
            return err
        }
        )

},

get: () => {

    return axios.get(apiUrls.condidatures.get)
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




