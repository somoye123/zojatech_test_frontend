import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CatchAll from './pages/CatchAll';
import Events from './pages/Events';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/events' component={Events} />
        <Route path='*' exact={true} component={CatchAll} />
      </Switch>
    </Router>
  );
}

export default App;
