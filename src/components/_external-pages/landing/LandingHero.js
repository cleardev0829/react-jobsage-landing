import { motion } from "framer-motion";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core";
// routes
import { varFadeIn, varWrapEnter, varFadeInRight } from "../../animate";

import { alpha, makeStyles } from "@material-ui/core/styles";

import { MHidden } from "../../@material-extend";
import { PATH_PAGE } from "src/routes/paths";

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[400],
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "fixed",
  alignItems: "center",
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const useStylesKeywordDesktop = makeStyles((theme) => ({
  root: {
    height: 60,
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: "10px 0 0 10px",
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

export function KeywordTextFieldDesktop(props) {
  const classes = useStylesKeywordDesktop();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      sx={{ width: "100%" }}
      {...props}
    />
  );
}

const useStylesKeywordMobile = makeStyles((theme) => ({
  root: {
    height: 60,
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: "10px",
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

export function KeywordTextFieldMobile(props) {
  const classes = useStylesKeywordMobile();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      sx={{ width: "100%" }}
      {...props}
    />
  );
}

export const useStylesRegionDesktop = makeStyles((theme) => ({
  root: {
    height: 60,
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: "0",
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

export function RegionTextFieldDesktop(props) {
  const classes = useStylesRegionDesktop();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      sx={{ width: "100%" }}
      {...props}
    />
  );
}

export const useStylesRegionMobile = makeStyles((theme) => ({
  root: {
    height: 60,
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: "10px",
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

export function RegionTextFieldMobile(props) {
  const classes = useStylesRegionMobile();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      sx={{ width: "100%" }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  buttonDesktop: {
    height: 60,
    width: "100%",
    justifyContent: "flex-start",
    borderRadius: "0 10px 10px 0",
  },
  buttonMobile: {
    height: 60,
    width: "100%",
    justifyContent: "flex-start",
    borderRadius: "10px",
  },
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const classes = useStyles();

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ zIndex: 10 }}
          spacing={2}
        >
          <Grid item xs={12}>
            <motion.div variants={varFadeInRight}>
              <MHidden width="mdDown">
                <Typography
                  color="white"
                  style={{ fontSize: 40, fontWeight: 400 }}
                  sx={{ mb: 3 }}
                  textAlign="center"
                >
                  Hiring made simple with our AI based global talent platform
                </Typography>
              </MHidden>
              <MHidden width="mdUp">
                <Typography
                  color="white"
                  style={{ fontSize: 20, fontWeight: 200 }}
                  sx={{ mb: 3 }}
                  textAlign="center"
                >
                  Hiring made simple with our AI based global talent platform
                </Typography>
              </MHidden>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div variants={varFadeInRight}>
              <MHidden width="mdDown">
                <Typography
                  color="white"
                  style={{ fontSize: 80, fontWeight: 500 }}
                  sx={{ mb: 3 }}
                  textAlign="center"
                >
                  Find your <span style={{ color: "#2C7BFF" }}>dream</span> job
                </Typography>
              </MHidden>
              <MHidden width="mdUp">
                <Typography
                  color="white"
                  style={{ fontSize: 30, fontWeight: 300 }}
                  sx={{ mb: 3 }}
                  textAlign="center"
                >
                  Find your <span style={{ color: "#2C7BFF" }}>dream</span> job
                </Typography>
              </MHidden>
            </motion.div>
          </Grid>
          {/* <MHidden width="mdDown">
            <Grid item xs={12} sx={{ width: "60%" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Grid item xs={5}>
                  <KeywordTextFieldDesktop
                    label="Enter job titles, keywords etc"
                    variant="filled"
                    id="keyword-input"
                  />
                </Grid>
                <Grid item xs={4}>
                  <RegionTextFieldDesktop
                    label="City region or post code"
                    variant="filled"
                    id="keyword-input"
                  />
                </Grid>
                <Grid item xs={3} style={{ height: "100%" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.buttonDesktop}
                    startIcon={<SearchIcon />}
                    to={PATH_PAGE.postSearchHome}
                    component={RouterLink}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </MHidden> */}
          {/* <MHidden width="mdUp">
            <Grid item xs={12} sx={{ width: "100%" }}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Grid item xs={12} sx={{ width: "90%" }}>
                  <KeywordTextFieldMobile
                    label="Enter job titles, keywords etc"
                    variant="filled"
                    id="keyword-input"
                  />
                </Grid>
                <Grid item xs={12} sx={{ width: "90%" }}>
                  <RegionTextFieldMobile
                    label="City region or post code"
                    variant="filled"
                    id="keyword-input"
                  />
                </Grid>
                <Grid item xs={5} style={{ width: "70%", height: "100%" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.buttonMobile}
                    startIcon={<SearchIcon />}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </MHidden> */}
        </Grid>
        <HeroOverlayStyle
          alt="hero"
          src="/static/home/home.png"
          variants={varFadeIn}
        />
        <HeroOverlayStyle
          alt="overlay"
          src="/static/overlay.svg"
          variants={varFadeIn}
        />
      </RootStyle>
      <Box sx={{ height: "100vh", zIndex: 100 }} />
    </>
  );
}
