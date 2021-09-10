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
          "Our AI reads resumes as humans with career Persona and not just a string of keywords. We've modeled our machine learning model to think like a recruiting human for unmatched speed, accuracy & stability when recommending candidates",
      },
    ],
    imageUrl: "/static/rekommendation/rekommendation.svg",
    buttonTitle: 'Try now',
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
