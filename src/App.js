import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import DevicesPage from './pages/Devices';
import FeedPage from './pages/Feed';
import QuotePage from './pages/Quote';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/devices" exact component={DevicesPage}/>
        <Route path="/quote" exact component={QuotePage}/>
        <Route path="/feed" exact component={FeedPage}/>
      </Switch>
    </Router>
  );
}

export default App;
