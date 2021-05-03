import './App.css';
import ProfileHead from "./components/ProfileHead";
import DealList from "./components/DealList";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


function App() {

  return (
    <div className="App">
      <ProfileHead></ProfileHead>
      <Link to="/Deal"> <Button>hi</Button></Link>
      <DealList></DealList>
    </div>
  );
}


export default App;
