import AddUsers from './components/AddUsers';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import UpdateUser from './components/UpdateUser';
import UsersList from './components/UsersList';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <div className='row'>
          <div className='col-lg-12'>
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/users' exact>
                <UsersList />
              </Route>
              <Route path="/users/:id/update">
                <UpdateUser />
              </Route>
              <Route path="/addUsers">
                <AddUsers />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;