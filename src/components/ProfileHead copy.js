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
    horizontalAlign:'center',
    verticalAlign:'middle',
    fontSize:12
  }

  const icontheme = {
    color:palette.blk,
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
        <Toolbar
        style={toolbarstyle}>
        <div style={{ height: '140px',width: '80px'}}>
          <div style={{ height: '30px'}}>
            <Typography
            style={{fontSize:11,color:palette.grn}}>
              viagra
            </Typography>
          </div>
          <Box height='100%' width='25%'>
          <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justify="center">
          <Button
            style={{verticalAlign:'middle',horizontalAlign:'center'}}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              setPopoverId({ ...popoverId, anchorEl: event.currentTarget })
            }
            aria-describedby="PopoverId"
            aria-haspopup="true"
            startIcon={
              <Avatar
                alt={acctData.name}
                src={acctData.profPic}
                style={{
                  display:'table-cell',
                  borderStyle:'solid',
                  borderWidth:'2px',
                  borderColor:palette.blk,
                  height:'50px',
                  width:'50px',
                  verticalAlign:'middle',
                  left:'6.25px'}}
              ></Avatar>}
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
              horizontal: 'left'
            }}
          >
             {popoverId.child}
          </Popover>
          <div style ={{ width:'100%',height: '30px', display: 'table'}}>
          <Box height = "100%">
            <Paper relevation={1} style={{
              display: "flex",
              flexDirection: "column",
              justifyContent:'center',
              textAlign:'center',
              height:'100%',
              }}>
            <Typography
            style={{
              fontSize:10,
              color:palette.text,
              horizontalAlign:'center',
              verticalAlign:'middle',
              display:'table-cell'}}>
                {acctData.handle}
            </Typography>
            </Paper>
          </Box>
          </div>
        </Box>
        </div>
        <div style={{ float:'left',width:'100%',height:'100%'}}>
          <div style = {{ float:'left', width:'32%', height:'100%', display: 'table'}}>
            <div style = {{verticalAlign:'middle',display:'table-cell'}}>
              <div style = {{ width:'100%',horizontalAlign:'center',verticalAlign:'middle',display:'inline-block'}}>
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
              </div>
              <div>
              <Typography
              style = {profilemetricsstyle}>
                {acctData.avgResponseTimeHr}hr:{acctData.avgResponseTimeMin}min
              </Typography>
              </div>
            </div>
          </div>
          <div style = {{ float:'left', width:'32%', height:'100%', display: 'table'}}>
            <div style = {{verticalAlign:'middle',display:'table-cell'}}>
              <div style = {{ width:'100%',horizontalAlign:'center',verticalAlign:'middle',display:'inline-block'}}> 
              <IconButton
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  setPopoverDeals({ ...popoverDeals, anchorEl: event.currentTarget })
                }
                aria-describedby="PopoverDeals"
                aria-haspopup="true">
                <TollIcon style={icontheme}></TollIcon>
              </IconButton>
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
              </div>
              <div>
              <Typography
              style ={profilemetricsstyle}>
                {acctData.numDeals}
              </Typography>
              </div>
            </div>
          </div>
          <div style = {{ float:'right', width:'32%', height:'100%', display: 'table'}}>
            <div style = {{verticalAlign:'middle',display:'table-cell'}}>
              <div style = {{ width:'100%',horizontalAlign:'center',verticalAlign:'middle',display:'inline-block'}}>
              <IconButton
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  setPopoverCont({ ...popoverCont, anchorEl: event.currentTarget })
                }
                aria-describedby="PopoverCont"
                aria-haspopup="true">
                <PeopleIcon style={icontheme}>
                </PeopleIcon>
              </IconButton>
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
              </div>
              <div>
              <Typography
              style = {profilemetricsstyle}>
                {acctData.avgContribution}
              </Typography>
              </div>
            </div>
          </div>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}