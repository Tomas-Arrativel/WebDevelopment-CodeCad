import React from 'react';

export const ContactPicker = ({ contacts, handleOnChange, value, name }) => {
  return (
    <select onChange={handleOnChange} value={value} name={name}>
      <option value='' selected>
        No Contact Selected
      </option>
      {contacts.map((contact, i) => (
        <option value={`contact-${i}`}>{contact.name}</option>
      ))}
    </select>
  );
};
