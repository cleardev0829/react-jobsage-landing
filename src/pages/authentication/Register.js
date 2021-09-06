import { Link as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Paper,
  Link,
  Container,
  Typography,
  Tooltip,
  Stack,
} from "@material-ui/core";
// hooks
import useAuth from "../../hooks/useAuth";
// routes
import { PATH_AUTH } from "../../routes/paths";
// layouts
import AuthLayout from "../../layouts/AuthLayout";
// components
import Page from "../../components/Page";
import { MHidden } from "../../components/@material-extend";
import { RegisterForm } from "../../components/authentication/register";
import AuthFirebaseSocials from "../../components/authentication/AuthFirebaseSocial";
import Logo from "src/components/Logo";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: 800,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
  textAlign: "center",
}));

// ----------------------------------------------------------------------

export default function Register() {
  const { method } = useAuth();

  return (
    <RootStyle title="Register | Minimal-UI">
      <Container>
        <ContentStyle>
          <Paper
            sx={{
              py: 3,
              px: 16,
              width: "100%",
              borderRadius: 2,
              zIndex: (theme) => theme.zIndex.modal,
              boxShadow: (theme) => theme.customShadows.z20,
            }}
          >
            <Stack
              direction="column"
              alignItems="center"
              spacing={2}
              sx={{ mb: 4 }}
            >
              <RouterLink to="/">
                <Logo />
              </RouterLink>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h3" gutterBottom>
                  Start your free Trial
                </Typography>
              </Box>
            </Stack>

            {method === "firebase" && <AuthFirebaseSocials />}

            <RegisterForm />

            <Typography
              variant="subtitle2"
              sx={{ mt: 3, textAlign: "center" }}
              color="text.secondary"
            >
              <span style={{ fontWeight: 500 }}>
                Already have an account?&nbsp;
              </span>
              <Link
                to={PATH_AUTH.login}
                component={RouterLink}
                color="secondary"
              >
                <span style={{ fontWeight: 600 }}>Login</span>
              </Link>
            </Typography>
          </Paper>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
