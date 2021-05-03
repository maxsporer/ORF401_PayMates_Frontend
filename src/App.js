import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import ProfileHead from "./components/ProfileHead";
import DealList from "./components/DealList";
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Grid,
  AppBar,
  Toolbar
} from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme) => ({
  layout: {
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundColor:palette.grn,
  },
}));

const palette = {
  grn:'#6CC68C',
  wht:'#F5F5F5',
  text: "#333333"
};

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ProfileHead></ProfileHead>
      <DealList></DealList>
      <Box position="static" className={classes.layout}>
        <Button
          variant="contained"
          href ="/CreateDeal">
            Make A Deal
        </Button>
      </Box>
    </div>
  );
}


export default App;
