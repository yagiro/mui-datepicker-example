import { createMuiTheme } from "@material-ui/core";

const datePickerMuiTheme = createMuiTheme({
    /*
    IMPORTANT: THIS CSS RULE IS ALSO REQUIRED!!!

    .MuiPickersDay-daySelected:hover {
        background-color: #d02f6a !important;
    }

    */
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: '#e4568b', /// main
        //   backgroundColor: lightBlue.A200,
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          // backgroundColor: lightBlue.A200,
          // color: "white",
        },
      },
      MuiPickersDay: {
        day: {
          color: '#333', /// text color
        //   color: lightBlue.A700,
        },
        daySelected: {
          backgroundColor: '#e4568b', /// selected day
        //   backgroundColor: lightBlue["400"],
        },
        dayDisabled: {
          color: '#bbb',
        //   color: lightBlue["100"],
        },
        current: {
          color: '#e4568b',
        //   color: lightBlue["900"],
        },
      },
      MuiPickersModal: {
        dialogAction: {
          color: 'purple',
        //   color: lightBlue["400"],
        },
      },
    },
  });

  export default datePickerMuiTheme;