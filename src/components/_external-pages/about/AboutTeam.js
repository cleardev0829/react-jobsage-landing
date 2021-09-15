import faker from "faker";
import { useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-eva/twitter-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import roundArrowRightAlt from "@iconify/icons-ic/round-arrow-right-alt";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
// material
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Button,
  Container,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
//
import {
  varFadeIn,
  varFadeInUp,
  MotionInView,
  varFadeInDown,
} from "../../animate";
import { CarouselControlsArrowsBasic2 } from "../../carousel";
import { MHidden } from "../../@material-extend";

// ----------------------------------------------------------------------

const MEMBERS = [
  {
    name: "Philomena Lamoureux",
    role: "(Advisor) Head of AI – blooma.ai",
    avatar: "/static/about/Philomena.jpg",
  },
  {
    name: "Antony Arul",
    role: "(Advisor) Product Leader – Facebook (APIs)",
    avatar: "/static/about/Antony.jpg",
  },
  {
    name: "Sudeep Nagar",
    role: "Vice President, Sales & Operations – Bluestone",
    avatar: "/static/about/Sudeep.jpg",
  },
  {
    name: "Philomena Lamoureux",
    role: "(Advisor) Head of AI – blooma.ai",
    avatar: "/static/about/Philomena.jpg",
  },
  {
    name: "Antony Arul",
    role: "(Advisor) Product Leader – Facebook (APIs)",
    avatar: "/static/about/Antony.jpg",
  },
  {
    name: "Sudeep Nagar",
    role: "Vice President, Sales & Operations – Bluestone",
    avatar: "/static/about/Sudeep.jpg",
  },
];

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.object,
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;
  return (
    <Card key={name} sx={{ p: 3, mx: 1.5 }}>
      <Box
        component="img"
        src={avatar}
        sx={{ width: "100%", borderRadius: 1 }}
      />
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
        {role}
      </Typography>
    </Card>
  );
}

export default function AboutTeam() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0 80px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 4, textAlign: "center" }}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3" color="primary">
          {`Our `}
          <span style={{ fontWeight: 400 }}>Advisors</span>
        </Typography>
      </MotionInView>

      <Box sx={{ position: "relative", mt: 8 }}>
        <Slider ref={carouselRef} {...settings}>
          {MEMBERS.map((member) => (
            <MotionInView key={member.name} variants={varFadeIn}>
              <MemberCard key={member.name} member={member} />
            </MotionInView>
          ))}
        </Slider>
        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: "translateY(-64px)" }}
        />
      </Box>
    </Container>
  );
}
