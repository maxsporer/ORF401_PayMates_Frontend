import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Paper,
    Grid,
    Typography,
		Avatar,
		Button,
} from '@material-ui/core';
import ProfilePic_Ellie from "../assets/ProfilePic_Ellie.JPG"
import ProfilePic_Hugues from "../assets/ProfilePic_Hugues.png"
import ProfilePic_Mike from "../assets/ProfilePic_Mike.png"
import ProfilePic_Korn from "../assets/ProfilePic_Korn.jpeg"
import ProfilePic_Elon from "../assets/ProfilePic_Elon.jpeg"
import ProfilePic_Kim from "../assets/ProfilePic_Kim.png"
import ProfilePic_Kanye from "../assets/ProfilePic_Kanye.jpg"

const palette = {
    grn:'#6CC68C',
    wht:'#F5F5F5',
    text: "#333333"
  };

const deal = {
	amnt:500,
	description:"A fun and creative way to pour beer",
	status:"Incomplete",
	members: [
		{
			id:0,
			pic:ProfilePic_Hugues,
			name:'Hugues Martin Dit Neuville',
			handle:'@parisianbigman',
			cont:.25,
			status:"Incomplete",
	},
		{
			id:1,
			pic:ProfilePic_Mike,
			name:'Michael Halle',
			handle:'@cupcake',
			cont:.25,
			status:"Incomplete",
	},
		{
			id:2,
			pic:ProfilePic_Korn,
			name:'Alain Kornhauser',
			handle:'@finesser',
			cont:.5,
			status:"Complete"
	}
	]
}
const useStyles = makeStyles((theme) => ({
    layout: {
			backgroundColor:palette.grn
    },
    header: {
			padding:"15px"
    },
    paper: {
			
		},
		members: {
			padding:"20px",
			height:"100%",
			width:"100%",
			display:"flex",
			flexDirection:"row",
		},
		memberInfoBox: {
			height:"100%",
			width:"60%",
			paddingTop:'2%',
			paddingLeft:'2%',
			
		},
		memberInfo: {
			display: "flex",
			flexDirection: "row",
			justifyContent:'right',
			height:'98%'
		},
    headerText: {
        padding:'10px',color: palette.text,fontSize:10
		},
		profileButton: {
			paddingLeft: '20%',
			verticalAlign:'middle',
			horizontalAlign:'center'
		},
		profilePic: {
			display:'table-cell',
			borderStyle:'solid',
			borderWidth:'2px',
			borderColor:palette.blk,
			height:'50px',
			width:'50px',
			verticalAlign:'middle'
			},
}));

export default function DealInfo() {
	const classes = useStyles();
	return (
		<main className={classes.layout}>
			<Box className={classes.header}>
				<Paper className={classes.paper}>
					<Typography className={classes.headerText}>
						<strong>Description : </strong>{deal.description}<br></br>
						<strong>Amount : </strong>${deal.amnt}<br></br>
						<strong>Status : </strong>{deal.status}<br></br>
					</Typography>
				</Paper>
			</Box>
			<Box className={classes.members}>
			<Grid
				container
				spacing={2}
				direction="column"
				alignItems="center"
				justify="center">
			{deal.members.map((member) => (
				<Box width="100%">
					<Grid
						container
						spacing={0}
						direction="row"
						justifyContent="center"
						alignItems="center">
					<Box height="100%" width="25%">
						<Grid container spacing={0} justify="center">
							<Button
								className={classes.profileButton}
								startIcon={
									<Avatar
										alt={member.name}
										src={member.pic}
										className={classes.profilePic}
									/>
								}
							/>
						</Grid>
						<Box height="25%">
							<Paper elevation={2} style={{
								display: "flex",
								flexDirection: "column",
								justifyContent:'center',
								textAlign:'center',
								height:'100%'
								}}>
								<Typography style = {{color: palette.text,fontSize:10}}>
									{member.handle}
								</Typography>
							</Paper>
						</Box>
					</Box>
					<Box className={classes.memberInfoBox}>
						<Paper elevation={2} className={classes.memberInfo}>
							<Typography style={{padding:'10px',color: palette.text,fontSize:10}}>
								<strong>Contribution : </strong>{100*member.cont}%<br></br>
								<strong>Status : </strong>{member.status}<br></br>
							</Typography>
						</Paper>
					</Box>
					</Grid>
				</Box>
				))}
				</Grid>
			</Box>
		</main>
	);
}