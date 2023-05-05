import React from 'react';
import InputWithLabel from "../../shared/components/InputWithLabel";

interface IProps {
  mail: string,
  setMail: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
}

const LoginPageForm = ({mail, setMail, password, setPassword}: IProps) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter email adress"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageForm;
