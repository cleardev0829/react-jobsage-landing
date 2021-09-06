import PropTypes from "prop-types";
// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";
//
import {
  varFadeIn,
  varFadeInUp,
  MotionInView,
  varFadeInDown,
} from "../../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(10, 24),
  backgroundColor: theme.palette.grey[100],
}));

const CardStyle = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  minHeight: 316,
  maxWidth: 362,
  width: "100%",
  height: "100%",
  margin: "auto",
  display: "flex",
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-around",
  borderRadius: 0.5,
  padding: theme.spacing(3),
  [theme.breakpoints.up(414)]: {
    padding: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.object,
};

function MemberCard({ member }) {
  const { name, value, icon } = member;
  return (
    <CardStyle>
      <Box component="img" src={icon} sx={{ width: "80px", height: "80px" }} />
      <Box>
        <Typography variant="h4" sx={{ mb: 0.5 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {value}
        </Typography>
      </Box>
    </CardStyle>
  );
}

export default function AboutTeam() {
  return (
    <RootStyle>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3">
          {`Contact `}
          <span style={{ fontWeight: 400 }}>Us</span>
        </Typography>
      </MotionInView>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={4}>
          <MotionInView variants={varFadeIn}>
            <MemberCard
              member={{
                name: "EMAIL ADDRESS",
                value: "arvindtadhakrishnen@irekommend.com",
                icon: "/static/about/contact-email.svg",
              }}
            />
          </MotionInView>
        </Grid>

        <Grid item xs={4}>
          <MotionInView variants={varFadeIn}>
            <MemberCard
              member={{
                name: "Company Details",
                value: "NAme : SimplyAI LLC",
                icon: "/static/about/contact-company.svg",
              }}
            />
          </MotionInView>
        </Grid>

        <Grid item xs={4}>
          <MotionInView variants={varFadeIn}>
            <MemberCard
              member={{
                name: "Address",
                value:
                  "6064 Cloverdale Dr Tega Cay South Carolina – United States -  29708",
                icon: "/static/about/contact-location.svg",
              }}
            />
          </MotionInView>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
