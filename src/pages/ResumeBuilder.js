// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  ContactUs,
} from "../components/_external-pages/about";
import { PostItem } from "src/components/_external-pages/landing";
import { ResumeTemplates } from "src/components/_external-pages/resume-builder";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle title="About us | Minimal-UI">
      <PostItem
        prefix="Try our Professional Resume Builder For Free"
        description={[
          {
            suffix:
              "With high competition in the job market, a Candidate needs all the gears to land the job role they want. IRekommend offers all the tools to help you build a compelling Resume that will get you noticed by employers.",
          },
        ]}
        buttonTitle="Build My  Resume"
        imageUrl="/static/resume-builder/resume.svg"
        direction={true}
      />   
      <ResumeTemplates />
    </RootStyle>
  );
}
