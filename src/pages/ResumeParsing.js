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
    prefix: "Automate Your Resume workflows with AI",
    description: [
      {
        prefix: "IRekommend's ",
        suffix:
          "s AI solutions work with your existing systems — extracting maximum value from your documents with minimum efforts. ",
      },
    ],
    imageUrl: "/static/resume-parsing/resume_parsing.svg",
    buttonTitle: 'Try now',
    direction: true,
  },  
};
// ----------------------------------------------------------------------

export default function ResumeParsing() {
  return (
    <RootStyle title="About us | Minimal-UI">    
      <PostItem {...data.item} />
      <ContactUs />
    </RootStyle>
  );
}
