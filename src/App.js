import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import SignInPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'> 
          <Home />
        </Route>
        <Route exact path='/signin'> 
          <SignInPage />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
