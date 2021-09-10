// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  AboutHero,
  AboutWhat,
  AboutTeam,
  AboutVision,
  AboutTestimonials,
  ContactUs,
} from "../components/_external-pages/about";
import { PostItem } from "src/components/_external-pages/landing";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

const data = {
  goal: {
    title: "ABOUT US",
    prefix: "Our",
    suffix: "Goal",
    description: [
      {
        suffix:
          "We want to bring AI into the recruitment platform so that it can simplify the task of jobseekers and recruiters.",
      },
    ],
    imageUrl: "/static/about/man.png",
    direction: true,
  },
  vision: {
    prefix: "Our",
    suffix: "Vision",
    description: [
      {
        suffix:
          "To build a total solution which can make jobseekers & recruiters task simple, we want to make technology as core part of job searching & recruitment process so that technology itself can become enjoyable recruiters as well as jobseekers Founder Details.",
      },
    ],
    imageUrl: "/static/home/pc1.svg",
    direction: false,
  },
  founder: {
    title: "Founder Details",
    description: [
      {
        prefix:
          "Arvind has over 16 years of product management experience, having launched and implemented a range of tech products for enterprises. Arvind holds the Top Innovator Award from TATA Group as well as the prestigious Young Manager Award from MMA (Mumbai Management Association).",
      },
    ],
    imageUrl: "/static/home/Arvind Radhakrishnen.jpg",
    direction: false,
  },
};
// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle title="About us | Minimal-UI">
      <PostItem {...data.goal} />
      <PostItem {...data.vision} />
      <PostItem {...data.founder} />
      <AboutTeam />
      <ContactUs />
    </RootStyle>
  );
}
