import logo from './logo.svg';
import './App.css';
import ProfileHead from "./components/ProfileHead";
import DealList from "./components/DealList";
import { BrowserRouter as Router, Link } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      {/* <Router>
        <Link to="/DealCreator"> hi </Link>
        <Switch>
          <Route path="/DealCreator">
            <About />
          </Route>
        </Switch>
      </Router> */}
      <ProfileHead></ProfileHead>
      <DealList></DealList>
    </div>
  );
}


export default App;
