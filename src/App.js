import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import DevicesPage from './pages/Devices';
import QuotePage from './pages/Quote';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/devices" exact component={DevicesPage}/>
        <Route path="/quote" exact component={QuotePage}/>
      </Switch>
    </Router>
  );
}

export default App;
