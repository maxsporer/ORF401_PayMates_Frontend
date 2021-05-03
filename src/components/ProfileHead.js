import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  IconButton,
  Popover,
  Button,
  Box,
  Paper,
  Grid
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TollIcon from '@material-ui/icons/Toll';
import PeopleIcon from '@material-ui/icons/People';

import ProfilePic_Ellie from "../assets/ProfilePic_Ellie.JPG"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const popuptexttheme = {
  padding: "5px",
  width: "100px",
  fontSize: 11
}

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

function PopoverId() {
  return (
    <Typography style={popuptexttheme}>
      {acctData.name}<br></br>
      {acctData.handle}<br></br>
      {acctData.numMates} mates
    </Typography>
  );
}

function PopoverTime() {
  return (
    <Typography style={popuptexttheme}>
      Your average payment response time is {acctData.avgResponseTimeHr} hours and {acctData.avgResponseTimeMin} minutes.
    </Typography>
  );
}

function PopoverDeals() {
  return (
    <Typography style={popuptexttheme}>
      You have participated in {acctData.numDeals} deals. Someone stop you.
    </Typography>
  );
}

function PopoverCont() {
  return (
    <Typography style={popuptexttheme}>
      Your average contribution to deals is {acctData.avgContribution}.
    </Typography>
  );
}

export default function ProfileHead() {
  const classes = useStyles();

  const palette = {
    blk: "#45B06A", //app bar text
    gry: "#45B06A", //app bar text
    grn: "#F4F4F6", // app bar background
    text:"#333333"
  };

  const appbarstyle = {
    width: "100%",
    height: "140px",
    backgroundColor: palette.grn
  }

  const toolbarstyle = {
    margin: '4px 4px 4px 4px',
    //borderRadius:'25px',
    borderStyle:'solid',
    borderWidth:'2px',
    borderColor:palette.gry
  }

  const profilemetricsstyle = {

    color:palette.text,
    textAlign:'center',
    verticalAlign:'middle',
    fontSize:12
  }

  const icontheme = {
    color:palette.blk
  }

  const handletheme = createMuiTheme({
    typography: {
      fontSize: 11,
      color: palette.blk,
    },
  });

  const hiddentheme = createMuiTheme({
    typography: {
      fontSize: 11,
      color: palette.grn,
    },
  });

  // **** POP UP BUTTONS **** //

  const [popoverId,setPopoverId] = React.useState({
    anchorEl: null,
    child: <PopoverId />
  });

  const [popoverTime,setPopoverTime] = React.useState({
    anchorEl: null,
    child: <PopoverTime />
  });

  const [popoverDeals,setPopoverDeals] = React.useState({
    anchorEl: null,
    child: <PopoverDeals />
  });

  const [popoverCont,setPopoverCont] = React.useState({
    anchorEl: null,
    child: <PopoverCont />
  });

  // **** POP UP BUTTONS **** //

  return (
    <div>
      <AppBar position="static" style={appbarstyle}>
        <Toolbar style={toolbarstyle}>
          <Box height={140} display="flex" flexDirection="row">
            <Box paddingTop = "50%" height = '50%' width='100%'>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                  <Button
                    style={{verticalAlign:'middle',horizontalAlign:'center',}}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                      setPopoverId({ ...popoverId, anchorEl: event.currentTarget })
                    }
                    startIcon={
                      <Avatar
                        alt={acctData.name}
                        src={acctData.profPic}
                        style={{
                        display:'table-cell',
                        borderStyle:'solid',
                        borderWidth:'2px',
                        borderColor:palette.blk,
                        height:'45px',
                        width:'45px',
                        verticalAlign:'middle',
                        left:'6.25px'}}>
                      </Avatar>}
                    />
              </Grid>
              <Popover
                id="PopoverId"
                open={Boolean(popoverId.anchorEl)}
                onClose={() => setPopoverId({ ...popoverId, anchorEl: null })}
                anchorEl={popoverId.anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left'}}
              >
                {popoverId.child}
              </Popover>
              <Box height="25%" width="100%">
                <Paper elevation={2} style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent:'center',
                  textAlign:'center',
                  height:'100%',
                  width:"100%"}}
                >
                  <Typography style = {{fontSize:10}}>
                    {acctData.handle}
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" height={140} width="75%" paddingTop='2%' paddingLeft='2%'>
            <Box paddingTop="18%" width="33%">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <IconButton
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                      setPopoverTime({ ...popoverTime, anchorEl: event.currentTarget })
                    }
                    aria-describedby="PopoverId"
                    aria-haspopup="true"
                    >
                    <AccessTimeIcon style={icontheme}>
                    </AccessTimeIcon>
                </IconButton>
              </Grid>
              <Popover
                id="PopoverTime"
                open={Boolean(popoverTime.anchorEl)}
                onClose={() => setPopoverTime({ ...popoverTime, anchorEl: null })}
                anchorEl={popoverTime.anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
              >
                {popoverTime.child}
              </Popover>
              <Paper>
                <Typography
                style = {profilemetricsstyle}>
                  {acctData.avgResponseTimeHr}hr:{acctData.avgResponseTimeMin}min
                </Typography>
              </Paper>
            </Box>
            <Box paddingTop="18%" width="33%">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <IconButton
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    setPopoverDeals({ ...popoverDeals, anchorEl: event.currentTarget })
                  }
                  aria-describedby="PopoverDeals"
                  aria-haspopup="true">
                  <TollIcon style={icontheme}></TollIcon>
                </IconButton>
              </Grid>
              <Popover
                id="PopoverDeals"
                open={Boolean(popoverDeals.anchorEl)}
                onClose={() => setPopoverDeals({ ...popoverDeals, anchorEl: null })}
                anchorEl={popoverDeals.anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
              >
                {popoverDeals.child}
              </Popover>
              <Paper>
                <Typography
                style ={profilemetricsstyle}>
                  {acctData.numDeals}
                </Typography>
              </Paper>
            </Box>
            <Box paddingTop="18%" width="33%" >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <IconButton
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    setPopoverCont({ ...popoverCont, anchorEl: event.currentTarget })
                  }
                  aria-describedby="PopoverCont"
                  aria-haspopup="true">
                  <PeopleIcon style={icontheme}>
                  </PeopleIcon>
                </IconButton>
              </Grid>
              <Popover
                id="PopoverCont"
                open={Boolean(popoverCont.anchorEl)}
                onClose={() => setPopoverCont({ ...popoverCont, anchorEl: null })}
                anchorEl={popoverCont.anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
              >
                {popoverCont.child}
              </Popover>
              <Paper>
                <Typography
                style = {profilemetricsstyle}>
                  {acctData.avgContribution}
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}