// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  AboutTeam,
  ContactUsWithMap,
} from "src/components/_external-pages/about";
// components
import Page from "../components/Page";
import { LandingHero, PostItem } from "../components/_external-pages/landing";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

const data = {
  reimagine: {
    prefix: "Reimagine",
    suffix: "Recruitment",
    description: [
      {
        suffix:
          "IRekommend is an end-to-end recruitment solution that reimagines the way you recruit with a focus on candidate experience.",
      },
    ],
    buttonTitle: "Start your free trial",
    imageUrl: "/static/home/Reimagine Recruitment.png",
    direction: true,
  },
  our: {
    prefix: "Our",
    suffix: "skill suit include",
    description: [
      {
        prefix: "Intelligent Hiring - ",
        suffix:
          "With our AI Powered Matching engine, you will never fail to get quality candidates with automated resume matching. Our Intelligent Hiring software has streamlined the hiring process and brought through thousands of qualified applicants for your review!",
      },
    ],
    imageUrl: "/static/home/Our Skill suite include.png",
    direction: false,
  },
  candidate: {
    prefix: "Candidate",
    suffix: "Engagement",
    description: [
      {
        suffix:
          "Leverage our AI Chatbots to upgrade your candidate screening & engagements, schedule and reschedule interviews with bulk emailing.",
      },
    ],
    imageUrl: "/static/home/Candidate Engagement.png",
    direction: true,
  },
  resume: {
    prefix: "Resume",
    suffix: "Parsing",
    description: [
      {
        suffix:
          "Our resume parser extracts complex personas in no time. With our deep learning module, you can extract candidate persona with ease and finesse--all for a low price!",
      },
    ],
    imageUrl: "/static/home/Resume parsing.png",
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

export default function LandingPage() {
  return (
    <RootStyle title="This is IRekommend website | Minimal-UI" id="move_top">
      <LandingHero />
      <ContentStyle>
        <PostItem {...data.reimagine} />
        <PostItem {...data.our} />
        <PostItem {...data.candidate} />
        <PostItem {...data.resume} />
        {/* <PostItem {...data.founder} /> */}
        <AboutTeam />
        {/* <ContactUsWithMap /> */}
      </ContentStyle>
    </RootStyle>
  );
}
