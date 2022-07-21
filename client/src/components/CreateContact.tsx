import { SaveOutlined } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

type ButtonProps = {
  update: (value: number) => void;
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const CreateContact = ({ update }: ButtonProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  } as FormData);

  const save = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  // Set FormData
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target?.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        border: 1,
        borderColor: "lightgrey",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          border: 1,
          borderColor: "lightgrey",
        }}
      >
        <form onSubmit={(e: React.SyntheticEvent) => save(e)}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                direction: "row",
              }}
            >
              <TextField
                name="firstName"
                label={"FirstName"}
                variant={"outlined"}
                sx={{ width: "100%", mr: 2 }}
                type={"text"}
                value={formData.firstName}
                onChange={onChange}
              />
              <TextField
                name="lastName"
                label={"LastName"}
                variant={"outlined"}
                sx={{ width: "100%" }}
                type={"text"}
                value={formData.lastName}
                onChange={onChange}
              />
            </Box>

            <TextField
              name="email"
              label={"Email"}
              variant={"outlined"}
              sx={{ width: "100%", mt: 2 }}
              type={"email"}
              value={formData.email}
              onChange={onChange}
            />

            <Button
              type="submit"
              variant="outlined"
              endIcon={<SaveOutlined />}
              sx={{ width: "100%", mt: 2 }}
            >
              <Typography align="center">Save</Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateContact;
