import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const nameOnChange = (e) => setTitle(e.target.value);
  const dateOnChange = (e) => setDate(e.target.value);
  const timeOnChange = (e) => setTime(e.target.value);
  const contactOnChange = (e) => setContact(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={nameOnChange} />
      <input
        type='date'
        min={getTodayString}
        value={date}
        onChange={dateOnChange}
      />
      <input type='time' value={time} onChange={timeOnChange} />
      <ContactPicker
        contacts={contacts}
        handleOnChange={contactOnChange}
        value={contact}
        name={title}
      />
      <input type='submit' value='Send' />
    </form>
  );
};
