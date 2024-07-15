import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Stack, Typography } from "@mui/material";
import { calculateDimension, calculateSize } from "../utils";
import about from '../assets/about.svg';

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.image}>
        <img src={about} alt="about"/>
      </Box> 
      
     <Box clasName={classes.content}>
        <Box className={classes.text}>
          <Typography sx={{fontWeight: 700, fontSize: calculateSize(52), lineHeight: calculateSize(80)}}>About Us</Typography>
          <Typography className={classes.paragragh}>
            Discover how Darktan Property Solutions Limited is revolutionizing
            property management with innovative tools and dedicated support,
            making it easier for landlords, tenants, and realtors to manage
            properties efficiently and effectively.
          </Typography>
          <Typography>
            With a focus on innovation and user satisfaction, Darktan Property
            Solutions Limited offers a comprehensive suite of features designed
            to simplify property management. Landlords can easily manage
            multiple properties, view tenant data, and handle transactions with
            multi-currency support. Tenants benefit from a user-friendly
            interface that allows for hassle-free rent payments, access to
            important documents, and direct communication with landlords.
          </Typography>
          <Typography>
            Our commitment to excellence extends beyond our technology. We
            believe in providing personalized support to ensure every user has a
            positive experience. By continuously improving our platform based on
            user feedback and leveraging the latest advancements in technology,
            Darktan Property Solutions Limited strives to be the leading choice
            for property management solutions. Join us and discover how we can
            make property management easier and more efficient for you.
          </Typography>
        </Box>

        <Box className={classes.getStarted}>
            <Typography>Get Started</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  root: {
    height: calculateSize(864),
    display: 'flex',
  },
  image: {
    width: calculateDimension(647, 1440),
  },
  content:{
    
    
  },
  text:{
    width: calculateDimension(750, 1440),
    marginLeft: calculateSize(300),
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    gap: calculateSize(25),
    marginTop: calculateSize(76)
  }, 
  paragragh:{
    fontWeight: 400,
    fontSize: calculateSize(18),
    lineHeight: calculateSize(28),

  },
  getStarted:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(102, 46, 155, 1)',
    color: 'rgba(245, 245, 245, 1)',
    width: calculateSize(221),
    height: calculateSize(60),
    borderRadius: calculateSize(10),
    marginLeft: calculateSize(300),
    marginTop: calculateSize(70)
  }
}));
