import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './EventFieldName.css'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ColorTextFields() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    
    <form className={classes.root} noValidate autoComplete="off" id='event_form'>
      


    <MuiPickersUtilsProvider utils={DateFnsUtils}>
     
     
      <Grid container justify="space-around">

      <TextField
        id="event_name"
        label="Event Name"
        variant="outlined"
        color="rebeccapurple"
      />

      <div className='row'>
        <div className='col'>
        <KeyboardDatePicker
          margin="normal"
          id="event_date"
          label="Event Date"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

</div>

      <div className='col'>
        <KeyboardTimePicker
          margin="normal"
          id="event_time"
          label="Event Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </div>
       </div>
      </Grid>
    </MuiPickersUtilsProvider>
    
    </form>
    
  );
}
