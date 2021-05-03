import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Paper,Switch} from '@material-ui/core';

import List from '@material-ui/core/List';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import ProfilePic_Ellie from "../assets/ProfilePic_Ellie.JPG"

// Need to connect this to database
const acctData = {
    name:"Maximilian Sporer",
    handle:"@mrperfect",
    numMates: "69",
    profPic: ProfilePic_Ellie,
    avgResponseTimeHr: 8,
    avgResponseTimeMin: 7,
    numDeals: "420",
    avgContribution: "69%"
  }

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const palette = {
    grn:'#6CC68C',
    wht:'#F5F5F5',
    text: "#333333"
  };

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function createTextField() {
    return (
    <TextField
        autoComplete="fname"
        name="firstName"
        variant="outlined"
        required
        fullWidth
        id="firstName"
        label="Description"
        autoFocus
    />);
}

export default function DealCreator() {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    const [btnDisabled, setBtnDisabled] = React.useState(true)
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            alt={acctData.name}
            src={acctData.profPic}
            style={{
            display:'table-cell',
            borderStyle:'solid',
            borderWidth:'2px',
            borderColor:palette.grn,
            height:'45px',
            width:'45px',
            verticalAlign:'middle',
            left:'6.25px'}}>
          </Avatar>
          <Box height="10px" width="100%"/>
        <Paper elevation={2} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:'center',
            textAlign:'center',
            height:'100%',
            width:"30%"
            }}>
            <Typography style = {{fontSize:14}}>
                {acctData.handle}
            </Typography>
        </Paper>
          <Box paddingTop="5%">
              <Typography>
                  Make a Deal
              </Typography>
          </Box>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                    color = {palette.grn}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Description"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Amount"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Payment Structure</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Split Evenly" />
                        <FormControlLabel onChange={(text) => setBtnDisabled(!text.target.value)} value="male" control={<Radio />} label="Custom" />
                        <TextField
                        onChange={(text) => setBtnDisabled(!text.target.value)}
                        />
                    </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={palette.grn}
              className={classes.submit}
              href = "/Deal"
            >
                Create
            </Button>
          </form>
        </div>
      </Container>
    );
  }
  