import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container, Stack } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import { PATH_AUTH, PATH_PAGE } from 'src/routes/paths';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar color={isHome ? 'transparent' : 'default'} sx={{ boxShadow: 0 }}>
      <ToolbarStyle
        disableGutters
        sx={{
          bgcolor: 'background.default',
          // height: { md: APP_BAR_DESKTOP - 16 }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              <Button to={PATH_AUTH.login} sx={{ borderRadius: 50 }} color="secondary" variant="outlined" component={RouterLink}>
                Sign In
              </Button>
              <Button to={PATH_PAGE.demo} sx={{ borderRadius: 50 }} color="secondary" variant="contained" component={RouterLink}>
                Demo
              </Button>
              {/* <Button sx={{ borderRadius: 50 }} variant="contained">
                Free Trial
              </Button> */}
            </Stack>
          </MHidden>
          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
