import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { calculateDimension, calculateSize } from "../utils";
import landlord from '../assets/landlord.svg';
import tenant from '../assets/tenant.svg'

const Register = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.text}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: calculateSize(52),
            lineHeight: calculateSize(61.1),
            textAlign: "center",
          }}
        >
          Start Your Experience
        </Typography>
        <Typography
          sx={{
            color: "rgba(74, 76, 86, 1)",
            fontWeight: 400,
            fontSize: calculateSize(20),
            lineHeight: calculateSize(30),
            textAlign: "center",
          }}
        >
          Select your role and explore the features designed specifically for
          you.
        </Typography>
      </Box>
      <Box className={classes.roles}>
        <Box className={classes.role}>
          <Box className={classes.roleImage}>
            <img src={landlord} alt="landlord" />
          </Box>
          <Box className={classes.roleText}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: calculateSize(24),
                lineHeight: calculateSize(32),
              }}
            >
              Landlord/Property Manager
            </Typography>
            <Typography>
              Manage properties, tenants, and tasks efficiently.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.role}>
        <Box className={classes.roleImage}>
            <img src={tenant} alt="tenant" />
          </Box>
          <Box className={classes.roleText}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: calculateSize(24),
                lineHeight: calculateSize(32),
              }}
            >
              Tenant
            </Typography>
            <Typography>
            Keep track of rent payments and manage your rental agreements.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.role}>
        <Box className={classes.roleImage}>
            <img src={landlord} alt="landlord" />
          </Box>
          <Box className={classes.roleText}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: calculateSize(24),
                lineHeight: calculateSize(32),
              }}
            >
              Ads-Realtor
            </Typography>
            <Typography>
            Manage property ads and reach potential clients effortlessly.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{marginTop: calculateSize(100)}}>
        <Typography sx={{fontWeight: 400, fontSize: calculateSize(18), lineHeight: calculateSize(28)}}>Already Have an Account?<span style={{color: '#883DCF'}}>Login</span></Typography>
      </Box>
    </Box>
  );
};

export default Register;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "864px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: calculateSize(866),
    height: calculateSize(103),
    gap: calculateSize(24),
    marginTop: calculateSize(42),
  },
  roles: {
    marginTop: calculateSize(150),
    width: calculateDimension(1313, 1440),
    height: calculateSize(269),
    display: "flex",
    gap: calculateSize(25),
  },
  role: {
    width: calculateDimension(421, 1313),
    height: calculateSize(269),
    borderRadius: calculateSize(15),
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F4ECFB",
    justifyContent: "center",
    alignItems: "center",
  },
  roleImage: {
    position: 'relative',
    top: calculateSize(-24),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: calculateSize(2),
    height: calculateSize(100),
    width: calculateSize(100),
    borderRadius: "50%",
    background: "#ffff",
  },
  roleText:{
    display: 'flex',
    flexDirection: 'column',
    gap: calculateSize(6)
  }
}));
