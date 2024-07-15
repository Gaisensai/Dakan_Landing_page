import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { calculateSize, calculateDimension } from "../utils";
import placeholder from "../assets/placeholder.svg";

const Property = () => {
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
              Featured Properties
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
              Available Properties for Sale
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: calculateSize(18),
                lineHeight: calculateSize(28),
                color: "rgba(74, 76, 86, 1)",
              }}
            >
              Explore properties listed by verified realtors on our platform.
              Discover a diverse range of homes for sale and find your next
              property with confidence.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Stack sx={{ marginTop: calculateSize(0) }} direction="row" spacing={6}>
        <Box className={classes.property}>
          <Box className={classes.propertyImg}>
            <img src={placeholder} alt="placeholder" />
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: calculateSize(24),
              lineHeight: calculateSize(32),
            }}
          >
            Fill
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: calculateSize(16),
              lineHeight: calculateSize(24),
            }}
          >
            Fill
          </Typography>
        </Box>
        <Box className={classes.property}>
          <Box className={classes.propertyImg}>
            <img src={placeholder} alt="placeholder" />
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: calculateSize(24),
              lineHeight: calculateSize(32),
            }}
          >
            Fill
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: calculateSize(16),
              lineHeight: calculateSize(24),
            }}
          >
            Fill
          </Typography>
        </Box>
        <Box className={classes.property}>
          <Box className={classes.propertyImg}>
            <img src={placeholder} alt="placeholder" />
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: calculateSize(24),
              lineHeight: calculateSize(32),
            }}
          >
            Fill
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: calculateSize(16),
              lineHeight: calculateSize(24),
            }}
          >
            Fill
          </Typography>
        </Box>
      </Stack>

      <Box className={classes.viewMore}>
        <Typography>View More</Typography>
      </Box>
    </Box>
  );
};

export default Property;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(251, 246, 255, 1)",
    height: calculateSize(864),
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
  property: {
    display: "flex",
    flexDirection: "column",
    gap: calculateSize(13),
    width: calculateDimension(461, 1440),
    height: calculateDimension(362, 864),
  },
  propertyImg: {
    width: calculateDimension(461, 1440),
    height: calculateDimension(287, 864),
  },
  viewMore:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(102, 46, 155, 1)',
    color: 'rgba(245, 245, 245, 1)',
    height: calculateSize(60),
    width: calculateSize(204),
    borderRadius: calculateSize(10)
  }
}));
