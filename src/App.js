import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/index';
import Page404 from './Components/pages/Page404';
import ThankYou from './Components/pages/ThankYou';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/ThankYou'>
          <ThankYou/>
        </Route>
        <Route path='*'>
          <Page404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
