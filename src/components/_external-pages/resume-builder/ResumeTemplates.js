import faker from "faker";
import { useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
// material
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  Grid,
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

// ----------------------------------------------------------------------

const MEMBERS = [
  {
    name: faker.name.findName(),
    role: "Head of growth",
    avatar: "/static/resume-builder/resume_template.svg",
  },
  {
    name: faker.name.findName(),
    role: "Strategy & Finance Ops",
    avatar: "/static/resume-builder/resume_template.svg",
  },
  {
    name: faker.name.findName(),
    role: "Head of AI – blooma.ai",
    avatar: "/static/resume-builder/resume_template.svg",
  },
  {
    name: faker.name.findName(),
    role: "Product Leader – Facebook (APIs)",
    avatar: "/static/resume-builder/resume_template.svg",
  },
  {
    name: faker.name.findName(),
    role: "People-Operations - Google",
    avatar: "/static/resume-builder/resume_template.svg",
  },
  {
    name: faker.name.findName(),
    role: "Global Head of People",
    avatar: "/static/resume-builder/resume_template.svg",
  },
];

// ----------------------------------------------------------------------

ResumeCard.propTypes = {
  member: PropTypes.object,
};

function ResumeCard({ member }) {
  const { name, avatar } = member;
  return (
    // <Card key={name} sx={{mx: 1.5 }}>
    // <Box component="img" src={avatar} sx={{ width: "100%", borderRadius: 1 }} />
    // </Card>

    <Card key={name} sx={{ p: 1, mx: 1.5 }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>     
      <Box
        component="img"
        src={avatar}
        sx={{ width: "100%", borderRadius: 1.5 }}
      />
        <Box sx={{ mt: 1, mb: 1 }}>
        <Button  variant="contained">
          Use this template
        </Button>
      </Box>
    </Card>
  );
}

export default function ResumeTemplates() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 4,
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
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10, textAlign: "center" }}>
      <MotionInView variants={varFadeInUp}>
        <Grid item xs={5} sx={{ margin: "auto", mb: 5 }}>
          <Typography variant="h3">
            Create an Effective Resume in a Matter of Minutes
          </Typography>
        </Grid>
        <Grid item xs={7} sx={{ margin: "auto", mb: 5, textAlign: "left" }}>
          <Typography
            // variant="h3"
            sx={{
              color: "text.secondary",
            }}
          >
            Transforming your resume to match a job description is a critical
            step in getting hired. IRekommend recommends you the best resume, go
            through our library of more than 100 resume samples to learn to
            create a resume that best fits the Job role that you are applying
            for. With our resume template, you are bound to get noticed by the
            recruiters
          </Typography>
        </Grid>
      </MotionInView>

      <Box sx={{ position: "relative" }}>
        <Slider ref={carouselRef} {...settings}>
          {MEMBERS.map((member) => (
            <MotionInView key={member.name} variants={varFadeIn}>
              <ResumeCard key={member.name} member={member} />
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
