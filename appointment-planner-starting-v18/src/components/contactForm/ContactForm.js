import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const nameOnChange = (e) => setName(e.target.value);
  const phoneOnChange = (e) => setPhone(e.target.value);
  const emailOnChange = (e) => setEmail(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={nameOnChange}
      />
      <input
        type='tel'
        placeholder='Phone'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        title='Telephone number format: XXX-XXX-XXXX'
        value={phone}
        onChange={phoneOnChange}
      />
      <input
        type='email'
        placeholder='E-mail'
        value={email}
        onChange={emailOnChange}
      />
      <input type='submit' value='Send' />
    </form>
  );
};

export default { ContactForm };
