/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab/';
import AdaptersDateFns from '@mui/lab/AdapterDateFns';

const DateAndTimePickerPage = () => {
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const [selectTime, setSelectTime] = useState<Date | null>(null);
  const [selectDateTime, setSelectDateTime] = useState<Date | null>(null);
  console.log({ selectDateTime });

  return (
    <LocalizationProvider dateAdapter={AdaptersDateFns}>

      <Stack spacing={4} sx={{ width: '250px' }}>
        <DatePicker
          label="Date Picker"
          renderInput={(params) => <TextField {...params} />}
          value={selectDate}
          onChange={(newValue) => {
            setSelectDate(newValue);
          }}
        />
        <TimePicker
          label="Time Picker"
          renderInput={(params) => <TextField {...params} />}
          value={selectTime}
          onChange={(newValue) => {
            setSelectTime(newValue);
          }}
        />
        <DateTimePicker
          label="Date Time Picker"
          renderInput={(params) => <TextField {...params} />}
          value={selectDateTime}
          onChange={(newValue) => {
            setSelectDateTime(newValue);
          }}
        />
      </Stack>

    </LocalizationProvider>
  );
};

export default DateAndTimePickerPage;
