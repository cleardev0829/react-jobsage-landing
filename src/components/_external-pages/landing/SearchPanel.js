import { useState } from "react";
import {
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Divider,
  Stack,
  FormControlLabel,
  Checkbox,
  TextField,
  Slider,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 0),
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

export default function SearchPanel(props) {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RootStyle>
      <Stack
        sx={{
          py: 3,
          width: "100%",
          borderRadius: 0.1,
          border: 0.75,
          borderColor: (theme) => theme.palette.divider,
        }}
      >
        <Grid container justifyContent="flex-start">
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <Stack direction="column" sx={{ px: 4, pt: 2 }}>
                <MotionInView variants={varFadeInUp}>
                  <Typography sx={{ mb: 2 }}>
                    <span style={{ fontWeight: "bold" }}>Filters</span>
                  </Typography>
                </MotionInView>
              </Stack>

              <Divider />

              <Stack direction="column" sx={{ px: 4, pt: 2 }}>
                <MotionInView variants={varFadeInUp}>
                  <Typography sx={{ mb: 2 }}>
                    <span style={{ fontWeight: "bold" }}>Skills</span>
                  </Typography>
                </MotionInView>
                {/* <MotionInView variants={varFadeInUp}>
                  <Typography sx={{ mb: 2 }}>
                    Whithin 10 miles of India
                  </Typography>
                </MotionInView> */}

                {/* <MotionInView variants={varFadeInUp}>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    aria-labelledby="continuous-slider"
                    sx={{ mb: 2, width: "100%" }}
                  />
                </MotionInView> */}
                <MotionInView variants={varFadeInUp}>
                  <TextField
                    fullWidth
                    label="Search Skills"
                    required
                    select
                    sx={{ mb: 2 }}
                  />
                </MotionInView>
              </Stack>

              <Divider />

              <Stack direction="column" sx={{ px: 4, pt: 2 }}>
                <MotionInView variants={varFadeInUp}>
                  <Typography sx={{ mb: 2 }}>
                    <span style={{ fontWeight: "bold" }}>Location</span>
                  </Typography>
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <TextField
                    fullWidth
                    label="Search Location"
                    required
                    select
                    sx={{ mb: 2 }}
                  />
                </MotionInView>
              </Stack>

              <Divider />

              <Stack direction="column" sx={{ px: 4, pt: 2 }}>
                <MotionInView variants={varFadeInUp}>
                  <Typography sx={{ mb: 2 }}>
                    <span style={{ fontWeight: "bold" }}>Availability</span>
                  </Typography>
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Ready to work now"
                  />
                </MotionInView>
              </Stack>

              <Divider />

              <Stack direction="column" sx={{ px: 4, pt: 2 }}>
                <MotionInView variants={varFadeInUp}>
                  <Typography sx={{ mb: 2 }}>
                    <span style={{ fontWeight: "bold" }}>
                      Years of work experience
                    </span>
                  </Typography>
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="More than 10 years"
                  />
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <FormControlLabel control={<Checkbox />} label="1~2 years" />
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="less than 1 year"
                  />
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <FormControlLabel control={<Checkbox />} label="Fresh" />
                </MotionInView>
              </Stack>
            </ContentStyle>
          </Grid>
        </Grid>
      </Stack>
    </RootStyle>
  );
}
