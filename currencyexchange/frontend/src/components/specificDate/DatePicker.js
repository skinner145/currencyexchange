import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns'
import{ setDate, getCur } from '../../redux/actions/currency'
import { Button } from '@material-ui/core'

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

function DatePicker(){
  const [selectedDate, setSelectedDate] = useState(new Date())
  const dispatch = useDispatch()
  function handleDateChange(date){
    setSelectedDate(date)
    dispatch(setDate(date))
  }

  function handleClick(){
    dispatch(getCur())
  }

  return(
    <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
      disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Select Date"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
    <Button onClick={() => {handleClick()}}>buttttttttttttttttttttttt</Button>
    </>
  )
}

export default DatePicker;
