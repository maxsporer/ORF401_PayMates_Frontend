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
      // handleClick:handleClick0,
      // handleClose:handleClose0,
      // anchor:anchor0,
      // popid:id0,
      // open:open0
  },
  {
      id:1,
      pic:ProfilePic_Mike,
      name:'Michael Halle',
      handle:'@cupcake',
      numMates:'652 mates',
      // handleClick:handleClick1,
      // handleClose:handleClose1,
      // anchor:anchor1,
      // popid:id1,
      // open:open1
  },
  {
      id:2,
      pic:ProfilePic_Korn,
      name:'Alain Kornhauser',
      handle:'@professorfinesser',
      numMates:'99999 mates',
      // handleClick:handleClick2,
      // handleClose:handleClose2,
      // anchor:anchor2,
      // popid:id2,
      // open:open2
  },
  {
      id:3,
      pic:ProfilePic_Elon,
      name:'Elon Musk',
      handle:'@Mrs_Kornauser',
      numMates:'4 mates',
      // handleClick:handleClick3,
      // handleClose:handleClose3,
      // anchor:anchor3,
      // popid:id3,
      // open:open3
  },
  {
      id:4,
      pic:ProfilePic_Kim,
      name:'Max Jun Kim',
      handle:'@hyung',
      numMates:'3258 mates',
      // handleClick:handleClick4,
      // handleClose:handleClose4,
      // anchor:anchor4,
      // popid:id4,
      // open:open4
  },
  {
      id:5,
      pic:ProfilePic_Kanye,
      name:'Kanye West',
      handle:'@chilldude22',
      numMates:'1 mates',
      // handleClick:handleClick5,
      // handleClose:handleClose5,
      // anchor:anchor5,
      // popid:id5,
      // open:open5,
  }
]

const popoverFuncs = []

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

// function popoverClick(i) {
//   return eval('(event: React.MouseEvent<HTMLButtonElement>) => setPopover'+ i + '({ ...popover' + i + ', anchorEl: event.currentTarget })')
// }

// function popoverOpen(i) {
//   return eval( 'open={Boolean(popover' + i + '.anchorEl)}')
// }

// function popoverClose(i) {
//   return eval('onCloses={() => setPopover}' + i + '({ ...popover' + i + 'anchorEl: null })}')
// }

// function popoverAnchor(i) {
//   return eval('anchorEl={popover' + i + '.anchorEl}')
//}

const popuptexttheme = {
    padding: "5px",
    width: "100px",
    fontSize: 11
  }

function PopoverProf() {
  return (
    <Typography style={popuptexttheme}>
      {accounts.name}<br></br>
      {accounts.handle}<br></br>
      {accounts.numMates}<br></br>
      id : {accounts.id}
    </Typography>
  );
}
export default function DealList() {

  const classes = useStyles();
  //const popovers = React.useState(null);
  // const popovers = Array(accounts.length).fill(React.useState({
  //   anchorEl: null,
  //   child: null
  // }));
  //const [popovers,setPopovers] = Array(accounts.length).fill(React.useState(null));
  // const [popovers,setPopovers] = React.useState(Array(accounts.length).fill({anchorEl: null, child: null}));
  // const [popovers,setPopovers] = React.useState(Array(accounts.length).fill({anchorEl: null, child: <PopoverProf/>}));
  //console.log(popovers[0])
  return (
    <List className={classes.root} subheader={<li />}>
      {accounts.map((accounts) => (
        <li key={accounts.id} className={classes.listSection} >
          <ul className={classes.ul} >
            <ListSubheader
                style={{
                    backgroundColor:palette.blu,
                    textAlign:'left',
                    fontSize:20}}
            >
                <div style = {{width:'100%',height:'80px',backgroundColor:palette.blu}}>
                    <div style={{float:'left',width:'25%',height:'100%',backgroundColor:palette.blu}}>
                    <Button
                        style={{verticalAlign:'middle',horizontalAlign:'center',}}
                        // onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                        //   setPopovers[accounts.id]({ ...popovers[accounts.id], anchorEl: event.currentTarget })
                        // }
                        startIcon={
                        <Avatar
                            alt={accounts.name}
                            src={accounts.pic}
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
                    {/* <Popover
                        id='popover{accounts.id}'
                        open={Boolean(popovers[accounts.id].anchorEl)}
                        onClose = {() => setPopovers[accounts.id]({ ...popovers[accounts.id], anchorEl: null })}
                        anchorEl = {popovers[accounts.id].anchorEl}
                        // open={Boolean(popovers[accounts.id].anchorEl)}
                        // onClose = {() => setPopovers[accounts.id]({ ...popovers[accounts.id], anchorEl: null })}
                        // anchorEl = {popovers[accounts.id].anchorEl}
                        // open={popoverOpen(accounts.id)}
                        // onClose={popoverClose(accounts.id)}
                        // anchorEl={popoverAnchor(accounts.id)}
                        anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                        }}
                        transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left'
                        }}
                    >
                      {popovers[accounts.id][0].child}
                      <Typography style={popuptexttheme}>
                        {accounts.name}<br></br>
                        {accounts.handle}<br></br>
                        {accounts.numMates}<br></br>
                        id : {accounts.id}
                      </Typography>
                    </Popover> */}
                    </div>
                    <div style={{float:'left',width:'75%',backgroundColor:palette.blu}}>
                        <Typography>
                            DEAL INFO <br></br>
                            description, amnt, no mates, complete
                        </Typography>
                    </div>
                </div>
            </ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${accounts.id}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}