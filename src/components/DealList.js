import React, {useState as useStateString}from 'react';
//import * as reactFuncs from 'react';
//import {useState as useStateString} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ProfilePic_Ellie from "../assets/ProfilePic_Ellie.JPG"
import ProfilePic_Hugues from "../assets/ProfilePic_Hugues.png"
import ProfilePic_Mike from "../assets/ProfilePic_Mike.png"
import ProfilePic_Korn from "../assets/ProfilePic_Korn.jpeg"
import ProfilePic_Elon from "../assets/ProfilePic_Elon.jpeg"
import ProfilePic_Kim from "../assets/ProfilePic_Kim.png"
import ProfilePic_Kanye from "../assets/ProfilePic_Kanye.jpg"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import {
    Typography,
    Popover,
    Avatar,
    Button
  } from '@material-ui/core';

const palette = {
    blu:'#6CC68C',
    ltblu:'#F5F5F5',
    text: "#333333"
  };

// Need to connect this to database
const acctData = {
    name:"Maximilian Sporer",
    handle:"@maxsporer",
    numMates: "666",
    profPic: ProfilePic_Ellie,
    avgResponseTimeHr: 24,
    avgResponseTimeMin: 7,
    numDeals: "420",
    avgContribution: "69%"
}

const accounts = [
  {
      id:0,
      pic:ProfilePic_Hugues,
      name:'Hugues Martin Dit Neuville',
      handle:'@parisianbigman',
      numMates:'524 mates',
      originatorCont:.25,
      amnt:500,
      description:"A fun and creative way to pour beer",
      status:"Incomplete",
      dealMates:[
        {
          id:1,
          pic:ProfilePic_Mike,
          name:'Michael Halle',
          handle:'@cupcake',
          cont:.25
        },
        {
          id:2,
          pic:ProfilePic_Korn,
          name:'Alain Kornhauser',
          handle:'@professorfinesser',
          cont:.5
        }
      ]
  },
  {
      id:1,
      pic:ProfilePic_Mike,
      name:'Michael Halle',
      handle:'@cupcake',
      numMates:'652 mates',
      originatorCont:.25,
      amnt:500,
      description:"A fun and creative way to pour beer",
      status:"Incomplete",
      dealMates:[
        {
          id:1,
          pic:ProfilePic_Mike,
          name:'Michael Halle',
          handle:'@cupcake',
          cont:.25
        },
        {
          id:2,
          pic:ProfilePic_Korn,
          name:'Alain Kornhauser',
          handle:'@professorfinesser',
          cont:.5
        }
      ]
  },
  {
      id:2,
      pic:ProfilePic_Korn,
      name:'Alain Kornhauser',
      handle:'@professorfinesser',
      numMates:'99999 mates',
      originatorCont:.25,
      amnt:500,
      description:"A fun and creative way to pour beer",
      status:"Incomplete",
      dealMates:[
        {
          id:1,
          pic:ProfilePic_Mike,
          name:'Michael Halle',
          handle:'@cupcake',
          cont:.25
        },
        {
          id:2,
          pic:ProfilePic_Korn,
          name:'Alain Kornhauser',
          handle:'@professorfinesser',
          cont:.5
        }
      ]
  },
  {
      id:3,
      pic:ProfilePic_Elon,
      name:'Elon Musk',
      handle:'@Mrs_Kornauser',
      numMates:'4 mates',
      originatorCont:.25,
      amnt:500,
      description:"A fun and creative way to pour beer",
      status:"Incomplete",
      dealMates:[
        {
          id:1,
          pic:ProfilePic_Mike,
          name:'Michael Halle',
          handle:'@cupcake',
          cont:.25
        },
        {
          id:2,
          pic:ProfilePic_Korn,
          name:'Alain Kornhauser',
          handle:'@professorfinesser',
          cont:.5
        }
      ]
  },
  {
      id:4,
      pic:ProfilePic_Kim,
      name:'Max Jun Kim',
      handle:'@hyung',
      numMates:'3258 mates',
      originatorCont:.25,
      amnt:500,
      description:"A fun and creative way to pour beer",
      status:"Incomplete",
      dealMates:[
        {
          id:1,
          pic:ProfilePic_Mike,
          name:'Michael Halle',
          handle:'@cupcake',
          cont:.25
        },
        {
          id:2,
          pic:ProfilePic_Korn,
          name:'Alain Kornhauser',
          handle:'@professorfinesser',
          cont:.5
        }
      ]
  },
  {
      id:5,
      pic:ProfilePic_Kanye,
      name:'Kanye West',
      handle:'@chilldude22',
      numMates:'1 mates',
      originatorCont:.25,
      amnt:500,
      description:"A fun and creative way to pour beer",
      status:"Incomplete",
      dealMates:[
        {
          id:1,
          pic:ProfilePic_Mike,
          name:'Michael Halle',
          handle:'@cupcake',
          cont:.25
        },
        {
          id:2,
          pic:ProfilePic_Korn,
          name:'Alain Kornhauser',
          handle:'@professorfinesser',
          cont:.5
        }
      ]
  }
]

const headertexttheme = {
    fontSize:11,
    color: palette.text
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: palette.blu,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 672,
  },
  listSection: {
    backgroundColor: palette.blu,
  },
  ul: {
    backgroundColor: palette.ltblu,
    padding: 0,
  },
}));

const popuptexttheme = {
    padding: "5px",
    width: "100px",
    fontSize: 11
  }

export default function DealList() {

  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {accounts.map((account) => (
        <li key={account.id} className={classes.listSection} >
          <ul className={classes.ul} >
            <ListSubheader
                style={{
                    backgroundColor:palette.blu,
                    textAlign:'left',
                    fontSize:20}}>
                <Box height={80} display="flex" flexDirection="row">
                  <Box height='100%' width='25%'>
                  <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justify="center">
                      <Button
                          style={{verticalAlign:'middle',horizontalAlign:'center',}}
                          startIcon={
                          <Avatar
                              alt={account.name}
                              src={account.pic}
                              style={{
                              display:'table-cell',
                              borderStyle:'solid',
                              borderWidth:'2px',
                              borderColor:palette.blk,
                              height:'45px',
                              width:'45px',
                              verticalAlign:'middle',
                              left:'6.25px'}}
                          ></Avatar>}
                      />
                      </Grid>
                      <Grid >
                        <Paper style={{textAlign:'center',fontSize:10}}>
                        {account.handle}
                        </Paper>
                      </Grid>
                  </Box>
                  <Box width="75%">
                    <Typography style={{
                            padding:'10px',
                            color: palette.text,
                            fontSize:10}}>
                              Description : {account.description}<br></br>
                              Amount : ${account.amnt}<br></br>
                              Contribution : {100*account.originatorCont}%<br></br>
                              Status : {account.status}<br></br>
                    </Typography>
                  </Box>
                    {/* <div style={{float:'left',width:'25%',height:'100%',backgroundColor:palette.blu}}>
                      
                    </div>
                    <div style={{
                      float:'left',
                      width:'75%',
                      backgroundColor:palette.blu}}>
                        
                    </div> */}
                </Box>
            </ListSubheader>
            {account.dealMates.map((dealMates) => (
              <ListItem key={`{DealMates.name}`}>
                <div>
                <div>
                  <Avatar
                    alt={accounts[dealMates.id].name}
                    src={accounts[dealMates.id].pic}
                    style={{
                    display:'table-cell',
                    borderStyle:'solid',
                    borderWidth:'2px',
                    borderColor:palette.blk,
                    height:'35px',
                    width:'35px',
                    verticalAlign:'middle',
                    left:'6.25px'}}
                  ></Avatar>
                </div>
                </div>
                <ListItemText>
                {dealMates.name}
                </ListItemText>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}