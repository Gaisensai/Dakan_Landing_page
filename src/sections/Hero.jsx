import React from "react";
import { makeStyles } from "@mui/styles";
import { calculateSize, calculateDimension,} from "../utils";
import { Box, Button, Typography } from "@mui/material";
import homeproperty from '../assets/homeProperty.svg'


const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.textContent}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 700, fontSize: calculateSize(80) }}
          >
            Simplify Your Property Management
          </Typography>
          <Typography
           variant="body1"
           className={classes.subtext}
           sx={{ 
            color: 'rgba(74, 76, 86, 1)', 
            height: calculateSize(90), 
            lineHeight: calculateSize(30), 
            fontWeight: 400, 
            fontSize: calculateSize(20), 
            lineHeight: calculateSize(30)}}>
            Our platform offers intuitive tools and features designed to make
            your property management effortless, whether you're a landlord,
            tenant, or real estate professional.
          </Typography>
        </Box>

        <Box className={classes.buttonContainer}>
          <Button
            variant="outline"
            disableElevation
            sx={{
              height: calculateSize(60),
              borderRadius: 2,
              width: calculateDimension(168, 409),
              fontSize: "1em",
              border: "1px solid rgba(102, 46, 155, 1)",
              textTransform: "none",
            }}
          >
            Learn More
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{
              height: calculateSize(60),
              borderRadius: 2,
              width: calculateDimension(221, 409),
              fontSize: "1em",
              background: "rgba(102, 46, 155, 1)",
              textTransform: "none",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box className={classes.image}>
        <img src={homeproperty} alt="Home Property" className={classes.img} />
      </Box>
    </Box>
  );
};

export default Hero;


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: "flex",
    width: '100vw',
    overflow: 'hidden',
    height: calculateSize(864)
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginTop: calculateSize(205),
    marginLeft: calculateSize(66),
    width: calculateDimension(644, 1440),
    height: calculateDimension(453, 886),
    gap: calculateSize(54)
  },
  textContent:{
    display: 'flex',
    flexDirection: 'column',
    gap: calculateSize(24)
  },
  subtext:{
    
  },
  buttonContainer:{
    display: 'flex',
    width: calculateDimension(458, 732),
    gap: calculateSize(20)
  },
  image: {
    
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
  },
}));