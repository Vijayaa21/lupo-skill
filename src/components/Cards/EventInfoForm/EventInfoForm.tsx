// src/components/EventInfoForm/EventInfoForm.tsx
import React from 'react';
import { Box, Card, TextField, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Dayjs } from 'dayjs';

interface EventInfoFormProps {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  startDate: Dayjs | null;
  setStartDate: (date: Dayjs | null) => void;
  startTime: Dayjs | null;
  setStartTime: (time: Dayjs | null) => void;
  tags: string;
  popTags: string;
  setPopTags: (tag: string) => void;
  listTags: string[];
  setTags: (tags: string) => void;
  setListTags: (tags: string[]) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleDelete: (tag: string) => void;
}

const EventInfoForm: React.FC<EventInfoFormProps> = ({
  title, setTitle, description, setDescription, startDate, setStartDate, startTime, setStartTime,
  tags, popTags, setPopTags, listTags, setTags, setListTags, handleKeyDown, handleDelete
}) => {
  return (
    <Card className="box1">
      <Typography variant="h4" className="fw-bold m-3">
        Event Info
      </Typography>
      <form>
        <Box className="m-3">
          <Typography className="create-event-label fw-bold">
            Event Title
          </Typography>
          <TextField
            label="Event Title"
            variant="outlined"
            fullWidth
            className="ml-3 create-event-input"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </Box>
        <Box className="m-3">
          <Typography className="create-event-label fw-bold">
            Event Description
          </Typography>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            className="ml-3 create-event-input"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
          />
        </Box>
        <Box className="m-3">
          <Typography className="create-event-label fw-bold">Date</Typography>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="ml-3"
              label="Select Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
            />
          </LocalizationProvider>
        </Box>
        <Box className="m-3">
          <Typography className="create-event-label fw-bold">Time</Typography>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Select Time"
              value={startTime}
              onChange={(newValue) => setStartTime(newValue)}
              className="ml-3 custom-timepicker"
            />
          </LocalizationProvider>
        </Box>
        <Box className="m-3">
          <Typography className="create-event-label fw-bold">
            Event Tags
          </Typography>
          <TextField
            label="Event Tags"
            variant="outlined"
            fullWidth
            className="ml-3 create-event-input"
            value={popTags}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPopTags(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />
          <Stack direction="row" className="m-2" spacing={1}>
            {listTags.map((ele, index) => (
              <Chip
                key={index}
                label={ele}
                onDelete={() => handleDelete(ele)}
                color="success"
                variant="outlined"
              />
            ))}
          </Stack>
        </Box>
      </form>
    </Card>
  );
};

export default EventInfoForm;
