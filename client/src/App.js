import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './components/Admin/AdminAuth/AdminLogin';
import AdminPanel from './components/Admin/AdminPanel/AdminPanel';
import ClientView from './components/Client/ClientView';
import PrivateRoute from './components/PrivateRoute';
import { getProduct } from './redux/actions/products';
import { getCategories } from './redux/actions/category'

function App({ getProduct, getCategories }) {
  useEffect(() => {
    getProduct();
    getCategories();
}, [])
  return (
    <Router>
      <Switch>
          <Route exact path='/admin/login'>
                <AdminLogin />
          </Route> 
          <PrivateRoute path='/admin'>
                <AdminPanel />
          </PrivateRoute>
            <ClientView />
      </Switch>
    </Router>
  );
}

export default connect(null, { getProduct, getCategories })(App);
