// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../components/Page";
import { useEffect } from "react";
import { paramCase } from "change-case";
import { useParams, useLocation } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "../redux/store";
import { getProducts } from "../redux/slices/product";
// routes
import { PATH_DASHBOARD } from "../routes/paths";
// components
import HeaderBreadcrumbs from "../components/HeaderBreadcrumbs";
import ProductNewForm from "../components/_external-pages/resume-upload/ProductNewForm";
import { Container, Grid, Stack, Typography } from "@material-ui/core";

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function ResumeUpload() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { name } = useParams();
  const { products } = useSelector((state) => state.product);
  const isEdit = pathname.includes("edit");
  const currentProduct = products.find(
    (product) => paramCase(product.name) === name
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <RootStyle title="About us | Minimal-UI">
      <Container maxWidth="lg">
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", alignItems: "center", px: 4, py: 10 }}
        >
          <ContentStyle>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid
                container
                spacing={5}
                justifyContent="center"
                sx={{ mb: 6 }}
              >
                <Typography variant="h3" color="primary" gutterBottom>
                  Upload your Resume
                </Typography>
              </Grid>
              <ProductNewForm isEdit={isEdit} currentProduct={currentProduct} />
            </Stack>
          </ContentStyle>
        </Grid>
      </Container>
    </RootStyle>
  );
}
