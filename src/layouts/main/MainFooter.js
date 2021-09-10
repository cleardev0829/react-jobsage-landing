import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Link, Button, Divider, Container, Typography, IconButton, Stack, TextField } from '@material-ui/core';
// routes
import { PATH_PAGE } from '../../routes/paths';
import {
  alpha,
  makeStyles,
} from '@material-ui/core/styles';
//
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill },
  { name: 'Google', icon: googleFill },
  { name: 'Linkedin', icon: linkedinFill },
  { name: 'Twitter', icon: twitterFill },
];

const LINKS = [
  {
    headline: 'Home',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      // { name: 'FAQs', href: PATH_PAGE.faqs }
    ]
  },
  {
    headline: 'Contact Us',
    children: [
      { name: 'hello@irekommend.com', href: '#' },
      { name: '6064 Cloverdale Dr Tega Cay South Carolina United States - 29708', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

const useStylesEmailInput = makeStyles((theme) => ({
  root: {
    height: 50,
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: "10px 0 0 10px",
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

const useStyles = makeStyles((theme) => ({
  button: {
    height: 50,
    maxWidth: 150,
    width: "100%",
    justifyContent: 'flex-start',
    borderRadius: "0 10px 10px 0",
  }
}));

function EmailInput(props) {
  const classes = useStylesEmailInput();

  return <TextField InputProps={{ classes, disableUnderline: true }} sx={{ width: '100%', maxWidth: 400 }} {...props} />;
}

// ----------------------------------------------------------------------

export default function MainFooter() {
  const classes = useStyles();

  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 400 }}>
              Sign up to our newsletter
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'center' }}
              sx={{ mt: 2, mb: { xs: 2, md: 0 } }}
            >
              <EmailInput
                label="Enter your email"
                variant="filled"
                id="keyword-input"
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
            We want to bring AI into the recruitment platform so that it can simplify the task of jobseekers and recruiters
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} >
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography sx={{ mt: { xs: 2, md: 0 } }} component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        // to={link.href}
                        to={"/"}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: 'block' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography component="p" variant="overline" sx={{ textAlign: 'center' }}>
              Follow US
            </Typography>
            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'center' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="secondary" sx={{ p: 1 }}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12}>
            <Typography
              component="p"
              variant="body2"
              sx={{
                mt: 10,
                fontSize: 13,
                textAlign: { xs: 'center', md: 'center' },
                color: "#AEAEAE"
              }}
            >
              IRekommend - © 2019. ALL RIGHTS RESERVED.
            </Typography>
          </Grid>
        </Grid>
        <Stack
          spacing={1.5}
          direction="row"
          justifyContent={{ xs: 'center', md: 'center' }}
          sx={{
            mt: 2, pb: 5,
          }}
        >
          <Link
            to={"/"}
            color="inherit"
            variant="body2"
            component={RouterLink}
            sx={{ display: 'block', textAlign: 'center' }}
          >
            Terms of Service
          </Link>
          <Link
            to={"/"}
            color="inherit"
            variant="body2"
            component={RouterLink}
            sx={{ display: 'block', textAlign: 'center' }}
          >
            Privacy Policy
          </Link>
          <Link
            to={"/"}
            color="inherit"
            variant="body2"
            component={RouterLink}
            sx={{ display: 'block', textAlign: 'center' }}
          >
            Terms and Conditions
          </Link>
        </Stack>
      </Container>
    </RootStyle >
  );
}
