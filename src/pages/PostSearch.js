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
    companyName: "Dummy text",
    jobTitle: "Full stack developer",
    location: "",
    skills: "Php, Laravel, mongoDB",
    education: "Minimum 16 years of education",
    lastUpdated: "Today",
  },
};

export default function PostSearch() {
  const classes = useStyles();

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
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mb: 1 }}>
          <TextField
            sx={{ width: "100%" }}
            label="500 resumes found"
          />
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={12} md={4} sx={{pr: 1}}>
            <SearchPanel {...data.item} />
          </Grid>
          <Grid item xs={12} md={8} sx={{pl: 1}}>
            <PostItem1 {...data.item} />
            <PostItem1 {...data.item} />
            <PostItem1 {...data.item} />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
