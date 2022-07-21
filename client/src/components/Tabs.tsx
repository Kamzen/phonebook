import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CreateContact from "./CreateContact";
const NavTabs = () => {
  const [value, setValue] = React.useState<number>(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const updateValue = (newValue : number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered textColor="secondary">
          <Tab value={1} label="Create New Contact" />
          <Tab value={2} label="View All Contacts" />
          <Tab value={3} label="Update Contact" />
        </Tabs>
      </Box>
      {value === 1 && <CreateContact update={updateValue} />}
    </Box>
  );
};

export default NavTabs;
