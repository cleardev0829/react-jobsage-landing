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
  item: {
    prefix: "IRekommend Hiring app",
    description: [
      {
        suffix:
          "The quickest way to hire! If your organization is hiring, kindly schedule a call with us now and our team will get in touch with you for providing you an AI based hiring app which will make your candidate journey simple.",
      },
    ],
    imageUrl: "/static/candidate-sourcing/candidate_sourcing.svg",
    buttonTitle: 'Free Trial',
    direction: true,
  },  
};
// ----------------------------------------------------------------------

export default function CandidateSourcing() {
  return (
    <RootStyle title="About us | Minimal-UI">    
      <PostItem {...data.item} />
      <ContactUs />
    </RootStyle>
  );
}
