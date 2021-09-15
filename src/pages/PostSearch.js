import {
  experimentalStyled as styled,
  makeStyles,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import Page from "../components/Page";
import { PostItem1, SearchPanel } from "src/components/_external-pages/landing";
import {
  KeywordTextFieldDesktop,
  RegionTextFieldDesktop,
} from "src/components/_external-pages/landing/LandingHero";
import { useParams } from "react-router-dom";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

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

const data = {
  item: {
    jobTitle: "Full stack developer",
    company: "Test company",
    location: "",
    skills: "Php, Laravel, mongoDB",
    education: "Minimum 16 years of education",
    yearOfExperience: "1 year frontend development...",
    lastUpdated: "Today",
  },
};

export default function PostSearch() {
  const classes = useStyles();
  const routeParams = useParams([]);

  return (
    <RootStyle title="About us | Minimal-UI">
      <Container maxWidth="lg">
        <Grid item xs={12} sx={{ my: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
          >
            <Grid item xs={10}>
              <KeywordTextFieldDesktop
                label=" Enter Job titles, keywords etc. or copy paste your job description here"
                variant="filled"
                id="keyword-input"
              />
            </Grid>
            <Grid item xs={2} style={{ height: "100%" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.buttonDesktop}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          {routeParams.from === "candidate-sourcing" && (
            <Grid item xs={12} md={4} sx={{ pr: 1 }}>
              <SearchPanel {...data.item} />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={routeParams.from === "candidate-sourcing" ? 8 : 12}
            sx={{ pl: routeParams.from === "candidate-sourcing" ? 1 : 0 }}
          >
            <Grid item xs={12} sx={{ my: 1 }}>
              <TextField
                sx={{ width: "100%" }}
                label="500 resumes found"
                disabled={true}
              />
            </Grid>
            <PostItem1 {...data.item} />
            <PostItem1 {...data.item} />
            <PostItem1 {...data.item} />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
