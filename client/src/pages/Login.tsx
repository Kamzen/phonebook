import { LoginOutlined } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { Formik } from "formik";

// Create the struct of the formData
interface myFormData {
  email: string;
  password: string;
}

// Login method
const login = (formData: Object) => {
  console.log(formData);
};

const Login = () => {
  let initFormValues: myFormData = { email: "", password: "" };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} mt={20}>
      <Formik
        initialValues={initFormValues}
        onSubmit={(values) => login(values)}
      >
        <Stack sx={{ width: 500 }} spacing={2}>
          <TextField
            name="email"
            label={"Email"}
            size={"small"}
            color={"secondary"}
          />
          <TextField
            name="password"
            label={"Password"}
            size={"small"}
            color={"secondary"}
          />
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<LoginOutlined />}
            type={"submit"}
          >
            Login
          </Button>
        </Stack>
      </Formik>
    </Stack>
  );
};

export default Login;
