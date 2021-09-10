import * as Yup from "yup";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSnackbar } from "notistack";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import closeFill from "@iconify/icons-eva/close-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Alert,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
// hooks
import useAuth from "../../../hooks/useAuth";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
//
import { MIconButton } from "../../@material-extend";
import { varFadeInUp, MotionInView } from "../../animate";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phone: Yup.string()
      .min(2, "Too Short!")
      .required("Phone number is required"),
    companyName: Yup.string()
      .min(2, "Too Short!")
      .required("Company name is required"),
    jobTitle: Yup.string()
      .min(2, "Too Short!")
      .required("Job title is required"),
    country: Yup.string().min(2, "Too Short!").required("Country is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      jobTitle: "",
      country: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await register(
          values.firstName,
          values.lastName,
          values.email,
          values.phone,
          values.companyName,
          values.jobTitle,
          values.contry
        );
        enqueueSnackbar("Register success", {
          variant: "success",
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    },
  });

  const { errors, touched, values, handleSubmit, isSubmitting, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit}</Alert>
          )}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="First Name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              required
            />

            <TextField
              fullWidth
              label="Last Name"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              required
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            required
          />

          <TextField
            fullWidth
            autoComplete="phone"
            type="phone"
            label="Phone Number"
            {...getFieldProps("phone")}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
            required
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="Company Name"
              {...getFieldProps("companyName")}
              error={Boolean(touched.companyName && errors.companyName)}
              helperText={touched.companyName && errors.companyName}
              required
            />

            <TextField
              fullWidth
              label="Job Title"
              {...getFieldProps("jobTitle")}
              error={Boolean(touched.jobTitle && errors.jobTitle)}
              helperText={touched.jobTitle && errors.jobTitle}
              required
            />
          </Stack>

          <TextField
            fullWidth
            label="Country"
            {...getFieldProps("country")}
            error={Boolean(touched.country && errors.country)}
            helperText={touched.country && errors.country}
            required
            select
          />

          <TextField
            fullWidth
            label="Preferred Language"
            {...getFieldProps("language")}
            error={Boolean(touched.language && errors.language)}
            helperText={touched.language && errors.language}
            required
            select
          />

          <MotionInView variants={varFadeInUp}>
            <Typography
              // variant="subtitle1"
              sx={{
                color: "text.secondary",
              }}
            >
              Through this form IRekommend collects your name and email. Check
              out our privacy policy for the full story on how we protect and
              manage your submitted data.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <FormControlLabel
              control={
                <Checkbox
                  {...getFieldProps("remember")}
                  checked={values.remember}
                />
              }
              label="Please subscribe me to the IRekommend newsletter"
            />
          </MotionInView>

          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Request Demo
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
