import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import DevicesPage from './pages/Devices';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/devices" exact component={DevicesPage}/>
      </Switch>
    </Router>
  );
}

export default App;
