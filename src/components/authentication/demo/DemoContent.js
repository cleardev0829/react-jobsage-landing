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
  ListItem,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";
import { MHidden } from "../../@material-extend";
import { DemoForm } from ".";

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

function IconBullet({ type = "item" }) {
  return (
    <Box sx={{ width: 24, height: 16, display: "flex", alignItems: "center" }}>
      <Box
        component="span"
        sx={{
          ml: "2px",
          width: 4,
          height: 4,
          borderRadius: "50%",
          bgcolor: "currentColor",
          ...(type !== "item" && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  );
}

export default function DemoContent(props) {
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
            sx={{ display: "flex", alignItems: "center", pr: 10 }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3">
                  IRekommend provides knowledge to everyone
                </Typography>
                <MHidden width="mdDown">
                  <Divider color="primary" sx={{ width: 70, my: 4 }} />
                </MHidden>
              </MotionInView>

              <DemoForm />
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} dir="ltr" sx={{pl: 10}}>
            <Box>
              <MotionInView variants={varFadeInUp}>
                <img alt={`screen`} src="/static/demo/demo.png" />
              </MotionInView>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
