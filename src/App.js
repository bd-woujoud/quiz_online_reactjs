
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Listcondidature from './components/Listcondidature';
import Login from "./components/Login";
import Offre from './views/Offre';
import OffreAdmin from './components/OffreAdmin';
import Test from './components/Test';
import { getAllCategorie,selectCategories, selectCreateCat,selectDeleteCat} from './features/categorie/categorieSlice';
import { getAllOffre,selectDeleteOffre} from './features/offre/offreSlice';
import Landing from './pages/Landing';
import CreateOffreItem from './components/CreateOffreItem';
import PublicRoute from './HigherOrderComponents/PublicRoute'
import PrivateRoute from './HigherOrderComponents/PrivateRoute'
import GetOffreAdmin from './components/GetOffreAdmin';
import ListQcm from './components/ListQcm';

function App() {
  const categories = useSelector(selectCategories)
  const deleteCat = useSelector(selectDeleteCat)
  const addCat = useSelector(selectCreateCat)
  const deleteOffre = useSelector(selectDeleteOffre)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllCategorie())
    dispatch(getAllOffre())
  }, [])

  useEffect(() => {


    if ((deleteCat === 'success') || (addCat === 'success') || (deleteOffre === 'success') || categories ==='success') {

      dispatch(getAllCategorie())
      dispatch(getAllOffre())

    }

  }, [addCat, deleteCat, deleteOffre]);

  return (
    <Router>

      <Switch>
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PrivateRoute path="/dash" roles={['admin']} component={Landing} />
        <PrivateRoute path="/condidature" roles={['admin']} component={Listcondidature} />
        <PrivateRoute path="/OffreAdmin" roles={['admin']} component={GetOffreAdmin} />
        <PublicRoute restricted={false} path="/test/:id" roles={['admin']} component={Test} />
        <PrivateRoute  path="/qcm" roles={['admin']} component={ListQcm} /> 
        <PrivateRoute path="/create" roles={['admin']} component={OffreAdmin} />
        <PrivateRoute path="/createoff" roles={['admin']} component={CreateOffreItem} />
        <PublicRoute restricted={false} path="/" component={Offre} />

      </Switch>
    </Router>
  );
}

export default App;