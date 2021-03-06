import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Wait from './Components/Wait';

import SecondForm from './Components/SecondForm/SecondForm';
import { useEffect } from 'react';

export default function SignIn() {
  const history = useHistory();
  const dataComing = history.location.state;
  const [phone, setPhone] = useState(dataComing.phone);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    if (password == confirmPassword) {
      const dataToNextPage = {
        name: dataComing.name,
        phone,
        password,
        confirmPassword,
      };
      history.push('/', dataToNextPage);
    }
  };

  return (
    <div style={{ padding: 0 }}>
      <Wait></Wait>
      <SecondForm
        phone={phone}
        setPhone={setPhone}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleSubmit={handleSubmit}
      ></SecondForm>
    </div>
  );
}
