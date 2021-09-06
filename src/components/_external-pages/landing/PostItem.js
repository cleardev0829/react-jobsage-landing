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

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
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

export default function PostItem(props) {
  const {
    title,
    prefix,
    suffix,
    description,
    buttonTitle,
    imageUrl,
    direction,
  } = props;

  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <RootStyle>
      <Container maxWidth="lg">
        {title && (
          <Grid container spacing={5} justifyContent="center" sx={{mb: 6}}>
            <Typography variant="h3" color="primary">
              {title}
            </Typography>
          </Grid>
        )}
        <Grid container spacing={5} justifyContent="center">
          {!direction && (
            <Grid item xs={12} md={6} dir="ltr" sx={{ px: 4 }}>
              <Box>
                <MotionInView variants={varFadeInUp}>
                  <img alt={`screen`} src={imageUrl} />
                </MotionInView>
              </Box>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center", px: 4 }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3">
                  {prefix && `${prefix} `}
                  <span style={{ fontWeight: 400 }}>{suffix}</span>
                </Typography>
                <MHidden width="mdDown">
                  <Divider color="primary" sx={{ width: 70, height: 2, my: 4 }} />
                </MHidden>
              </MotionInView>
              {description.map((item, index) => (
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    // variant="subtitle1"
                    sx={{
                      mb: 4,
                      color: isLight ? "text.secondary" : "common.white",
                    }}
                  >
                    {item.prefix && (
                      <>
                        <span style={{ fontWeight: "bold" }}>
                          {item.prefix}
                        </span>
                        {` - `}
                      </>
                    )}
                    {item.iconBullet ? (
                      <Grid key={index} item xs={12} md={12}>
                        <ListItem>
                          <IconBullet />
                          {item.suffix}
                        </ListItem>
                      </Grid>
                    ) : (
                      item.suffix
                    )}
                  </Typography>
                </MotionInView>
              ))}

              {buttonTitle && (
                <MotionInView variants={varFadeInUp}>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    sx={{ borderRadius: 50 }}
                  >
                    {buttonTitle}
                  </Button>
                </MotionInView>
              )}
            </ContentStyle>
          </Grid>

          {direction && (
            <Grid item xs={12} md={6} dir="ltr" sx={{ px: 4 }}>
              <Box>
                <MotionInView variants={varFadeInUp}>
                  <img alt={`screen`} src={imageUrl} />
                </MotionInView>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </RootStyle>
  );
}
