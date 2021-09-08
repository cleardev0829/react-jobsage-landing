// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../components/Page";
import {
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
    prefix: "Where AI reads resumes like humans",
    description: [
      {
        suffix:
          "Unmatched Speed, Accuracy & Stability of our AI for recommending Candidates for you IRekommend' s AI deep learning Engine reads resumes as humans with career Persona not just a string of keywords. We've modeled our Machine learning model to think like a recruiting human. With our AI the human bias is completely removed  and it makes recruitment process so simple and standard, with our Job and Candidate Matching AI, you can complete your heaviest of recruitment tasks in minutes.",
      },
    ],
    imageUrl: "/static/rekommendation/rekommendation.svg",
    buttonTitle: 'Free Trial',
    direction: true,
  },  
};
// ----------------------------------------------------------------------

export default function Rekommendation() {
  return (
    <RootStyle title="About us | Minimal-UI">    
      <PostItem {...data.item} />
      <ContactUs />
    </RootStyle>
  );
}
