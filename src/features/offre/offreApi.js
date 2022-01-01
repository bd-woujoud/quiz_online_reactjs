import axios from '../../config/axios'
import { apiUrls } from '../../config/requests'


// offre service

export const offreService = {

    // get request

    create: (data) => {

        return axios.post(apiUrls.offres.create,data)
            .then(res => {
                return res
            }
            )

            .catch(err => {
                return err
            }
            )

    },
  
    search: (data) => {
                return axios.get(`http://localhost:5000/offres/search?keyword=${data.keyword}`)
                    .then(res => {
                        return res
                    }
                    )
                    .catch(err => {
                        return err
                    }
                    )
        
            },
    //deletOffre
    delete: (id) => {
        
                return axios.delete(apiUrls.offres.delete +id)
                    .then(res => {
                        return res
                    }
                    )
                    .catch(err => {
                        return err
                    }
                    )
        
            },


    //updateOffre


    update: (data) => {
        
                return axios.put(apiUrls.offres.update +data.id, data)
                    .then(res => {
                        return res
                    }
                    )
                    .catch(err => {
                        return err
                    }
                    )
        
            },


 

}