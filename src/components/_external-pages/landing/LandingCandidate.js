import {
  alpha,
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Container,
  Typography,
  Divider,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";
import { MHidden } from "../../@material-extend";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage:
    theme.palette.mode === "light"
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : "none",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

// ----------------------------------------------------------------------

export default function LandingCandidate() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3">
                  Candidate <span style={{ fontWeight: 400 }}>Engagement</span>
                </Typography>
                <MHidden width="mdDown">
                  <Divider color="primary" sx={{ width: 70, my: 4 }} />
                </MHidden>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: isLight ? "text.secondary" : "common.white",
                  }}
                >
                  Use our AI Chatbots to upgrade your candidate screening &
                  engagements, use bulk emailing to Schedule & Reschedule your
                  interviews.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} dir="ltr">
            <Box>
              <MotionInView variants={varFadeInUp}>
                <img alt={`screen`} src={`/static/home/second.svg`} />
              </MotionInView>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
