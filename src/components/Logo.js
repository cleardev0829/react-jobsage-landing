import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box sx={{ width: 68, height: 55, ...sx }}>
      <svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 54" width="70" height="54">
        <title>Layer 2</title>
        <defs>
          <image width="70" height="54" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA2CAYAAAB6DO9FAAAAAXNSR0IB2cksfwAACjJJREFUeJztmgt0TWcWx29SIoNm4nG9EnUrIiVTQqlHPKJMw8SrpodSbbjHIyJEqEc8KhiltEkwIvd57vsdMYwGLel4RMcoVc0U9ZoVYhotUlRGrbXn/917kqZrxGNIrl7Za+119vnOt7+zz+/svb9z17oSyRMgi120cXEOFUMLFuZSA2/H88QIgJRAiemizdTJ2/E8MQIgp8vBLNlMEd6O54mRdzdTKKDE1kKplVqplcchMxzfyZKdV19LcV7jZjt/4Oa4bnBzXTe5ea5b3HxXGbcg5zaX6rrDLXLdicL2Xdfb8daIJDpKpEnOy4dmOr//aZbzKqW4Sglw6B3XDQIcAhya7/oPAQ4BzmFolLdjrhFJcF6KnOa4RNOd39IM52UCIPpfQD/+DMh1m/N2zDUiE3Kv1ptqv5A5zVF8LNHx78IkZ0nhTOd3hcnOK4WzXNcKAadojuu6GxCDMy/n1tMBhsmE3HN1pzguREy1F0cm2i9FJjlKItF3IpE9kcieFPQemu36gURATw+YewkAcay8kll5AVCKs7QWDBP0Hm66s4TQoAHnCgNUC4ZJguMil+AopkQ0aJQYa9C1YJhMtv+Lm+IoIgAitnuhQdeCYSK3n+Hk9rPE288TAzTVcaEWDJN4+yku3v4NTbSfBpxzNMlxvhYMk/G2f3Jv2b+mePtJmgA4E5FB3o6p2iVGyPcfbN4TPMSyRxpn+VvoMMsB6cjco7/4LTTW9iU31nacxtm+ordsX9Pb9pO+CyZGyK03wLw9fpApL+tV865dgy278/9gzi8YatmbP9y6P3eo9WBo+dzRtiPcaOtResN2zA3nTVuh74GJEnLr9DbkhPUz5q6JMW079Ypp+41B5jwCHBps/oSGWPIJmUNDrfsjy33+aP0H97r1MI22HgGcL+gN6zHfAhNlNAZ1N5izexpspb2NTupj2kz9TFsoxrSVXjFvpwpAlt002LinAsxI60FupPUzes36d2KAONvnvgOmo1moG6XXjXnJYCwDHOphtBKDE210/djXmHu8v2lr/gDTX/MHmvMKBpl3Xow17qoAM8yyjxtu2U8jLAU0CnBGWQ/5BhiZINTpqFP066RXneliEKirQUcARC8bLY6eRvu43gZXhz7GXGlf4xZpjHl7KOBEDzLmBZX7o/dwrLwACHAOMEC+Aaa9sC46QrdhX0ddFv1OryAAKo0yaFM76XThXfX6md0M5s97GG0l0OF383/V/DEXi/4z2Lzb038se30DTJiQMTNcl1kGONRBl3UnUrfp00i9UtZJp1kXpRfOvWQw5ANOWneDNfJu/gNNedwg846K/jPEvMc3wLQR1ux8XviAwoR0ai+sPxEhbBj/gpAVF6lTFL2oV62P0mul9/JHc+YGmLbRQNNHxAD93rzTN8CEalcWtdauojbC+wRAm2XCh0HtdJkOQFLIhIx69/PvY8rh+oo7GBo028F8A0xLzTJqpV1Bodr36DntaodMWBscpkvPbKfNGP8g/r2Mds6zg+VQX8DpZ/qLb4BppllS0lyzlFpql1GIdgXAZPgja5rLtB90fBB/bO/jsYMRdjC2xd/EFh9X3THXiDTWpBY21SwiAKIW2rQDzdRp3VFeac8Jqw60Ft7vfj//LgbdRjRo6mY00csG68UeBlt0TcRd7fJb9Tvpwep51FizgKSaRd9L1YvTpdqloa00K3rdz7eDkNUYDbqos15LXfTs+8dQ0M1gDL2f369CGqpT4p5Vzz4NQIAzn5poUoubaBaOup9fuJAhba9bv6qjblP59w8B0IoofDDWRNzVLoGbEhrUVyZNbqhKvh2knkPB6rnUSD3/BuDEVOWDHiRrK6TnY/e67fn+2UgAdPMFYdM9t/ZfndRVJkoDVUnW+qqZ1EA9i5BBADSvFIDyG6tTU9CDuGaaxcNbaJfx2MH+3FpYVerZ3tcSdjAK162jCN36ImRQmLef5bFLXWWCrJ4yMT9QNZ0YoGfVKeTJIPQf9QICnDJ3g9akYXtfju19Jbb3VSQT1lBbfCC2ExigzB3hQqZPwokJUE1TA04Zg9MQ2RPkzp657ubcVLPQs3the2dwsL2XAk6ZTCtmj5B+o52QKYQJmV29/SzVIs8oEyIDlAmbAGhHfdWMYw1UyacAqBiATiB7DgCQVapZPFaqWSJtqV0+PET7pxPIoNvl5fW88GEJvqJ74JvINxrxL0SY4F9HNSWonmpaxG/USVFozn2CVLM7obRCgoUFFT8VWghpdVpqlveCbgEgao0v6DbIIJTYUXxFJwLO0/t312DAaaZJ64HmXBLi/nmB/iOsRgatOQVAI70dn9dFql7Sqbnm3U/QoG+0KgeEHoQM8o2PvkcRqXpRO/Se9QCE319prEGz8vKNnwmPKk0AB9v7PmTQTexg+0KElYHejqlWHkX8lPJ0PyXfwdtxPLJkyxvjWeZAh7GH6uyv5K9KVO5jDJSgVjzoThzPQsfebz3RZ0RNxF6tks23wXMchWbcFQzscImSb+3vgbNdoubr+Cn4UNhLcLRCTbAnl68nghmF8R5YTwEdKFHK6+N8NFSHa5vZzTDegs3HcQTAZ0EVGN8GXQo7jo3B3gGfGdBG4lwtxldB7f4ejce16ezlsXPYse4gVPIA2MMwpoc6MH8DzmXiGvM893fHso35IzsC3D5KPhrXjRjfAns1jueqBqPmm0sUUwJgfwTNw3kg5rGgz/op5OOw8BrYVwCvczkYLDoXmu95sEmt2YPCLnQHqJRP8/PYGfAJxngatBRrvYuxpbCLoMWwU7D2fNi3cG1sJehf4ZwXYdzCvP1YczLmfgw9KFFMDMWRxf8trq3Fkc09CLUhCwLFuL5ha4vXb3leIv8i9Dh7cVhvIuw82D9VCQbqhH4KLcDkNxld2NfZDbDgRGgqzs8j2PRKwZ/F9UOAEgGofrA3QndLVHwLgPWXKOQTRLCdRTBf4N6NWOCewPg98HuGKQMBXV1p7dnuN6+Q94VdgmyMF+8xBudHoENYluFYhrH5sOVQi+fty9uIYDTuLFHKW8I+ibFpmPO2+wWp5O3dWafk2fpnqs4YpduhCM4rWElgwYZigLuhQrni+vRKwd/EjbZWKi8jrm+rqF+lPJrdB2M9RTAHWSZWKpfc8qnig1RA91PxY8R5LMaziDVWfJD+7OWx/gZobM3rleODZkJbVV4PL4Jl7FGMJcOHleStihgV8jCcH7tHj+FDMJ7mISvvKQa4l9WnhKWgQj4MC78HYO0rlRLrOydwnIqAAwFpLnubrKRwHsEeHud7cGxbPWD4WBH8GNi9cJyJ65Mk2ZMCqgbDD4B92f2ClXwY1meVcOXePUbNNxRrX4G0Zc23v7vWPanLjlvZ9lYJzBgGRQwu3l33SF+xxD4T+0ScWJaPHQzrXazxi/c7DD2F89cRu39VYDw+7h53zc/TNr5kpeUG89CSDWjZfMMHno8mDhitHv5G/6e478c3fSgfNR/gToZK8l+EkVrmgi7XwAAAAABJRU5ErkJggg==" />
        </defs>
        <style>
          tspan
        </style>
        <use id="Layer 2" href="#img1" x="0" y="0" />
      </svg>
    </Box>
  );
}
