import { Icon } from "@iconify/react";
import homeFill from "@iconify/icons-eva/home-fill";
import fileFill from "@iconify/icons-eva/file-fill";
import roundGrain from "@iconify/icons-ic/round-grain";
import bookOpenFill from "@iconify/icons-eva/book-open-fill";
import featureOpenFill from "@iconify/icons-eva/file-add-outline";
import { PATH_DASHBOARD, PATH_PAGE } from "src/routes/paths";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: "/",
  },
  {
    title: "Resume builder",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_PAGE.resumeBuilder,
  },
  {
    title: "Company",
    path: "/Company",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: "Company",
        items: [
          { title: "About us", path: PATH_PAGE.about },
          { title: "Blog", path: PATH_PAGE.blog },
          { title: "Privacy Policy", path: PATH_PAGE.privacyPolicy },
          { title: "Terms and Conditions", path: PATH_PAGE.termsConditions },
        ],
      },
    ],
  },
  // {
  //   title: "Features",
  //   path: "/Features",
  //   icon: <Icon icon={featureOpenFill} {...ICON_SIZE} />,
  //   children: [
  //     {
  //       subheader: "Feature",
  //       items: [
  //         {
  //           title: "Recruitment Solution",
  //           path: PATH_PAGE.recruitmentSolution,
  //         },
  //         { title: "Resume Parsing", path: PATH_PAGE.resumeParsing },
  //         { title: "Candidate Sourcing", path: PATH_PAGE.candidateSourcing },
  //         { title: "Rekommendation", path: PATH_PAGE.rekommendation },
  //       ],
  //     },
  //   ],
  // },
];

export default menuConfig;
