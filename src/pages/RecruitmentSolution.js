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
  talent: {
    title: "Total recruitment solution Powered by AI",
    prefix: "Talent",
    suffix: "Management",
    description: [
      {
        suffix:
          "Deliver unmatched candidate search experience Configure your hiring process Efficient onboarding process via bulk emails and chatbots.",
      },
    ],
    imageUrl: "/static/home/pc1.svg",
    direction: true,
  },
  candidate: {
    prefix: "Candidate",
    suffix: "Journey",
    description: [
      {
        prefix: "Resume parsing",
        suffix:
          " - Extract the personality of thousands of resume and provide in a systematic manner for ease of access.",
      },
      {
        prefix: "Candidate 360",
        suffix:
          " - provide everything about the candidate at one place, emails, resumes, candidate scores, candidate interaction history, feedbacks, notes, candidate success rates.",
      },
      {
        prefix: "Resume ranking",
        suffix: " - Resume ranking",
      },
    ],
    imageUrl: "/static/home/pc1.svg",
    direction: false,
  },
  reports: {
    prefix: "Reports &",
    suffix: "Analytics",
    description: [
      {
        suffix:
          "Instantly see your realtime date powered by our AI based reports tool. Brilliantly designed and easy to use, you can send reports directly from the tool Business intelligence platform, get your data analyzed by our high-powered BI tool and provide you recommendations. Advanced Dashboards, fully customizable with summarized birds eye view.",
      },
    ],
    imageUrl: "/static/home/pc2.svg",
    direction: true,
  },
  engagement: {
    prefix: "Candidate",
    suffix: "Engagement",
    description: [
      {
        suffix:
          "Bulk emails, chatbots, feedbacks will provide ease of access to the candidates.",
      },
      {
        suffix: "Video & Audio interviews can be done with the candidates.",
      },
      {
        suffix:
          "Automatic scheduling of interviews with integration in the build in calendar.",
      },
      {
        suffix:
          "Use the AI candidate solution to augment your hiring experience. ",
      },
      {
        suffix:
          "Use pre-assessment tests to screen applicants for job skills even before interview. ",
      },
      {
        suffix: "Contact us for Demo of our total recruitment solution.",
      },
    ],
    buttonTitle: "Demo",
    imageUrl: "/static/home/pc1.svg",
    direction: false,
  },
};
// ----------------------------------------------------------------------

export default function RecruitmentSolution() {
  return (
    <RootStyle title="About us | Minimal-UI">
      <PostItem {...data.talent} />
      <PostItem {...data.candidate} />
      <PostItem {...data.reports} />
      <PostItem {...data.engagement} />      
      <ContactUs />
    </RootStyle>
  );
}
