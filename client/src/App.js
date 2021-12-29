import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './components/Admin/AdminAuth/AdminLogin';
import AdminPanel from './components/Admin/AdminPanel/AdminPanel';
import ClientView from './components/Client/ClientView';
import Home from './components/Client/Home/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/admin/login'>
                <AdminLogin />
          </Route> 
          <PrivateRoute path='/admin'>
                <AdminPanel />
          </PrivateRoute>
          {/* <Route exact path="/">
                <Home />
          </Route>
          <Route path="/products">
              
            </Route>  */}
            <ClientView />
      </Switch>
    </Router>
  );
}

export default App;
