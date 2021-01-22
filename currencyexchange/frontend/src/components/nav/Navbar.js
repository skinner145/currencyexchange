import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'
import SpecificDateWrapper from '../specificDate/SpecificDateWrapper'
import TimePeriodWrapper from '../TimePeriodWrapper'


function Navbar(){
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  return(
    <>
    <AppBar color="primary" position="absolute">
      <Typography>MY FAT APP</Typography>
      <Box margin="auto">
        <Tabs
          value={value}
          indicatorColor="secondary"
          onChange={handleChange}
        >
          <Tab label="Specific Date" />
          <Tab label="Time Period" />
        </Tabs>
      </Box>
    </AppBar>
    <br /><br /><br /><br /><br />
    <SpecificDateWrapper value={value} index={0} />
    <TimePeriodWrapper value={value} index={1} />
    </>
  )
}

export default Navbar;
