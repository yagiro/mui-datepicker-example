import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";

import datePickerMuiTheme from './datePickerMuiTheme';

window.c = 0;

const StaticDatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
      console.log('DATE_CHANGE', newDate);
      window.d = newDate;
      setDate(newDate);
  };

  // prettier-ignore
  return (
      <ThemeProvider theme={ datePickerMuiTheme }>
        <DatePicker
            autoOk
            // orientation="landscape"
            variant="static"
            openTo="date"
            value={date}
            onChange={onChange}
            shouldDisableDate={moment => moment.weekday() === 0}
            />
        </ThemeProvider>
  );
};

export default StaticDatePicker;