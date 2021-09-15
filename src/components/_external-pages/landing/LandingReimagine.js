import {
  alpha,
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Button,
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

export default function LandingReimagine() {
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
                  Reimagine <span style={{ fontWeight: 400 }}>Recruitment</span>
                </Typography>
                <MHidden width="mdDown">
                  <Divider color="primary" sx={{ width: 70, my: 4 }} />
                </MHidden>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 4,
                    color: isLight ? "text.secondary" : "common.white",
                  }}
                >
                  IRekommend is an end-to-end recruitment solution which
                  reimagines the way you recruit Right side Pic : Use Manatal
                  Pic with a variation
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Button size="large" color="primary" variant="contained">
                  Start your free trial
                </Button>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} dir="ltr">
            <Box>
              <MotionInView variants={varFadeInUp}>
                <img alt={`screen`} src={`/static/home/first.svg`} />
              </MotionInView>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
