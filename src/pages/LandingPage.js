// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
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
    suffix: "Recruitement",
    description: [
      {
        suffix:
          "IRekommend is an end-to-end recruitment solution which reimagines the way you recruit Right side Pic : Use Manatal Pic with a variation",
      },
    ],
    buttonTitle: "Start your free trial",
    imageUrl: "/static/home/pc1.svg",
    direction: true,
  },
  our: {
    prefix: "Our",
    suffix: "skill suit include",
    description: [
      {
        prefix: "Intelligent Hiring",
        suffix:
          "Hire through thousands of candidates wisely brought through our high-powered AI With our AI Powered Matching engine You will never fail to get quality candidates with automated resume matching.",
      },
    ],
    imageUrl: "/static/home/pc3.svg",
    direction: false,
  },
  candidate: {
    prefix: "Candidate",
    suffix: "Engagement",
    description: [
      {
        suffix: "Use our AI Chatbots to upgrade your candidate screening & engagements, use bulk emailing to Schedule & Reschedule your interviews."
      }
    ],
    imageUrl: "/static/home/pc3.svg",
    direction: true,
  },
  resume: {
    prefix: "Resume",
    suffix: "Parsing",
    description: [
      {
        suffix: "Use our resume parser to extract candidate persona With our deep learning module you can extract complex personas in no time"
      }
    ],      
    imageUrl: "/static/home/pc3.svg",
    direction: false,
  },
};

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="This is JobSage landing page | Minimal-UI" id="move_top">
      <LandingHero />
      <ContentStyle>
        <PostItem {...data.reimagine} />
        <PostItem {...data.our} />
        <PostItem {...data.candidate} />
        <PostItem {...data.resume} />
      </ContentStyle>
    </RootStyle>
  );
}
