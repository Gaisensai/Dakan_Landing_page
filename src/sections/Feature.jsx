import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { calculateSize, calculateDimension } from "../utils";
import placeholder from "../assets/placeholder.svg";
import rightarrow from '../assets/rightarrow.svg';

const Feature = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sectionTitle}>
        <Box>
          <Box className={classes.title}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: calculateSize(14),
                letterSpacing: "0.5%",
                lineHeight: calculateDimension(20),
              }}
            >
              Features Section
            </Typography>
          </Box>
          <Box className={classes.text}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: calculateSize(52),
                lineHeight: calculateSize(61.1),
              }}
            >
              Key Features of Darktan Property Solutions Limited
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                width: calculateSize(866),
                fontWeight: 400,
                fontSize: calculateSize(18),
                lineHeight: calculateSize(28),
                color: "rgba(74, 76, 86, 1)",
              }}
            >
              Discover the comprehensive tools and features we offer for
              landlords, tenants, and realtors, designed to make property
              management simpler and more efficient for everyone.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className={classes.features}>
        <Box className={classes.box}>
          <Box>
            <img src={placeholder} alt="placeholder" />
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: calculateSize(24),
              lineHeight: calculateSize(32),
              textAlign: "center",
            }}
          >
            Powerful Tools for Landlords and Property Managers
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: calculateSize(16),
              lineHeight: calculateSize(24),
              textAlign: "center",
            }}
          >
            Manage multiple properties and tenants effortlessly with our
            platform. Keep track of tenant data, rent expiration times, and
            transaction records. Hire task managers for property fixes, share
            important documents, and view active insurance policies.{" "}
          </Typography>
          <Box className={classes.getStarted}>
            <Typography sx={{fontWeight: 400, color: 'rgba(136, 61, 207, 1)', fontSize: calculateSize(24), lineHeight: calculateSize(32)}} >Get Started</Typography>
            <img src={rightarrow} alt="arrow" className={classes.arrow} />
          </Box>
        </Box>
        <Box className={classes.box}>
          <Box>
            <img src={placeholder} alt="placeholder" />
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: calculateSize(24),
              lineHeight: calculateSize(32),
              textAlign: "center",
            }}
          >
            Convenient Features for Tenants
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: calculateSize(16),
              lineHeight: calculateSize(24),
              textAlign: "center",
            }}
          >
            Register with ease using a code from your landlord and manage rent
            payments directly through our platform. Stay informed with
            maintenance updates, access shared documents, and rate your
            landlord. Enjoy the convenience of viewing rent countdowns and
            sharing payment information with other tenants.{" "}
          </Typography>
          <Box className={classes.getStarted}>
            <Typography sx={{fontWeight: 400, color: 'rgba(136, 61, 207, 1)', fontSize: calculateSize(24), lineHeight: calculateSize(32)}} >Get Started</Typography>
            <img src={rightarrow} alt="arrow" className={classes.arrow} />
          </Box>
        </Box>
        <Box className={classes.box}>
          <Box>
            <img src={placeholder} alt="placeholder" />
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: calculateSize(24),
              lineHeight: calculateSize(32),
              textAlign: "center",
            }}
          >
            Effective Tools for Ads-Realtorss
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: calculateSize(16),
              lineHeight: calculateSize(24),
              textAlign: "center",
              color: 'rgba(74, 76, 86, 1)'
            }}
          >
            Post properties for rent or sale and manage your listings through a
            comprehensive dashboard. Gain increased visibility with ads on our
            home page, connect with potential clients, and customize your
            profile to showcase your expertise. Access analytics to track the
            performance of your ads and optimize your listings.
          </Typography>
          <Box className={classes.getStarted}>
            <Typography sx={{fontWeight: 400, color: 'rgba(136, 61, 207, 1)', fontSize: calculateSize(24), lineHeight: calculateSize(32)}} >Get Started</Typography>
            <img src={rightarrow} alt="arrow" className={classes.arrow} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Feature;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(251, 246, 255, 1)",
    height: calculateSize(1108),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    marginTop: calculateSize(57),
    width: calculateDimension(886, 1440),
    height: calculateDimension(193, 864),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: calculateSize(24),
    textAlign: "center",
  },
  title: {
    color: "rgba(102, 46, 155, 1)",
    backgroundColor: "rgba(231, 216, 245, 1)",
    width: calculateDimension(173, 866),
    textAlign: "center",
    paddingTop: calculateSize(10),
    paddingLeft: calculateSize(20),
    paddingBottom: calculateSize(10),
    paddingRight: calculateSize(20),
    borderRadius: calculateSize(50),
    margin: "0 auto",
  },
  text: {
    marginTop: calculateSize(24),
    display: "flex",
    flexDirection: "column",
    gap: calculateSize(12),
    height: calculateDimension(129, 193),
  },
  features: {
    display: "flex",
    justifyContent: 'center',
    gap: calculateSize(26),
    width: calculateDimension(1313, 1440),
    marginTop: calculateSize(64),
  },
  box: {
    display: "flex",
    flexDirection: "column",
    width: calculateSize(421),
    gap: calculateSize(13),
    alignItems: "center",
  },
  getStarted: {
    marginTop: calculateSize(10),
    width: calculateSize(166),
    textAlign: 'center',
    display: 'flex',
    gap: calculateSize(8),
    borderBottom: '2px solid rgba(136, 61, 207, 1)',
    
  },
  
}));
