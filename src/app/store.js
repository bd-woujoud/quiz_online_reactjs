import { configureStore } from '@reduxjs/toolkit';
 import authenticationReducer from '../features/user/authenticationSlice' 
import offresReducer from '../features/offre/offreSlice'
import condidatureReducer from '../features/condidature/condidatureSlice'
import testsReducer from '../features/testt/testSlice'
import categoriesReducer from '../features/categorie/categorieSlice'
import qcmReducer from '../features/qcm/qcmSlice'


export const store = configureStore({

  reducer: {

    authentication: authenticationReducer, 
    offres: offresReducer,
    condidatures: condidatureReducer,
    tests:testsReducer,
    categories:categoriesReducer,
    qcms:qcmReducer
    
  },
});