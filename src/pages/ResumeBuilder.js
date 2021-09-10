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

export default function ResumeBuilder() {
  return (
    <RootStyle title="About us | Minimal-UI">
      <PostItem
        prefix="Get hired faster with our resume builder!"
        description={[
          {
            suffix:
              "Resume examples designed by recruiters to help you land the job. Our professionally written resumes are tailored for thousands of unique jobs, including engineering, marketing and finance.",
          },
        ]}
        buttonTitle="Build your Resume"
        imageUrl="/static/resume-builder/resume.png"
        direction={true}
      />   
      <ResumeTemplates />
    </RootStyle>
  );
}
