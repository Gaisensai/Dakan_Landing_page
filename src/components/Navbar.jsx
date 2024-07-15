import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { calculateDimension } from "../utils";


const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.NavItemContainer}>
        <Typography sx={{width: calculateDimension(253, 1440), fontSize: '25px'}}>Logo</Typography>
        <List className={classes.list}>
          <ListItem>
            <ListItemText>
              <Typography variant="body1">Home</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="body1">Features</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="body1">Properties</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="body1">Pricing</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="body1">FAQ</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="body1">Contact Us</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Box className={classes.buttonContainer}>
          <Button 
            variant="outline" 
            disableElevation 
            sx={{
              height: '100%', 
              borderRadius: 2, 
              width: calculateDimension(168, 409), 
              fontSize: '1em', 
              border: '1px solid rgba(102, 46, 155, 1)', 
              textTransform: 'none'
            }}
          >
            Login
          </Button>
          <Button 
            variant="contained" 
            disableElevation 
            sx={{
              height: '60px', 
              borderRadius: 2, 
              width: calculateDimension(221, 409), 
              fontSize: '1em', 
              background: 'rgba(102, 46, 155, 1)', 
              textTransform: 'none'
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 10,
    backgroundColor: "rgba(240, 241, 243, 1)",
    display: 'flex',
    justifyContent: 'center',   
    width: "100vw",
    height: calculateDimension(97, 846),
  },
  buttonContainer: {
    width: calculateDimension(409, 1440),
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    width: calculateDimension(778, 1440),
    justifyItems: 'space-evenly',
  },
  listItemText: {
    whiteSpace: 'nowrap', 
  },
  NavItemContainer: {
    width: calculateDimension(1312, 1440),
    height: calculateDimension(60, 97),
    margin: 'auto',
    display: "flex",
    alignItems: 'center'
  },
}));
