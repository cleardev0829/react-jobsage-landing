import {
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Paper,
  Stack,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";


// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 0),
  // backgroundImage:
  //   theme.palette.mode === "light"
  //     ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
  //         theme.palette.grey[300]
  //       } 100%)`
  //     : "none",
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

const ContentItem = (props) => (
  <MotionInView variants={varFadeInUp}>
    <Stack
      direction="row"
      sx={{
        mb: 1,
      }}
    >
      <Typography>
        <span style={{ fontWeight: "bold" }}>{`${props.title} -`}</span>
      </Typography>
      <Typography color="secondary">
        <span style={{ fontWeight: "bold" }}>&nbsp;{props.value}</span>
      </Typography>
    </Stack>
  </MotionInView>
);

export default function PostItem1(props) {
  const { companyName, jobTitle, location, skills, education, lastUpdated } =
    props;

  const theme = useTheme();

  return (
    <RootStyle>
      {/* <Container maxWidth="lg"> */}
        <Paper
          sx={{
            py: 3,
            px: 4,
            width: "100%",
            borderRadius: 0.1,
            zIndex: (theme) => theme.zIndex.modal,
            boxShadow: (theme) => theme.customShadows.z20,
          }}
        >
          <Grid
            container
            // spacing={5}
            justifyContent="flex-start"
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", alignItems: "center", px: 4 }}
            >
              <ContentStyle>
                <MotionInView variants={varFadeInUp}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    <span
                      style={{ fontWeight: "bold" }}
                    >{`Company name - ${companyName}`}</span>
                  </Typography>
                </MotionInView>

                <ContentItem title="Job title" value={jobTitle} />
                <ContentItem title="Location" value={location} />
                <ContentItem title="Skills required" value={skills} />
                <ContentItem title="Education required" value={education} />

                <MotionInView variants={varFadeInUp}>
                  <Stack
                    direction="row"
                    sx={{
                      mt: 3,
                    }}
                  >
                    <Typography color="secondary">
                      <span style={{ fontWeight: "bold" }}>Last updated</span>
                    </Typography>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}>
                        &nbsp;{`- ${lastUpdated}`}
                      </span>
                    </Typography>
                  </Stack>
                </MotionInView>
              </ContentStyle>
            </Grid>
          </Grid>
        </Paper>
      {/* </Container> */}
    </RootStyle>
  );
}
