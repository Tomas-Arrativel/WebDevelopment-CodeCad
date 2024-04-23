import React, { useState } from 'react';

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
  appointments,
  setAppointments,
  contacts,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && contact && date && time) {
      setAppointments({ name, contact, date, time });
      setName('');
      setContact('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          title={name}
          setTitle={setName}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  );
};
