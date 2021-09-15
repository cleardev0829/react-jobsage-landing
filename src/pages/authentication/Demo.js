// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../../components/Page";
import { DemoContent } from "src/components/authentication/demo";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function Demo() {
  return (
    <RootStyle title="This is IRekommend website | Minimal-UI" id="move_top">
      <ContentStyle>
        <DemoContent />
      </ContentStyle>
    </RootStyle>
  );
}
