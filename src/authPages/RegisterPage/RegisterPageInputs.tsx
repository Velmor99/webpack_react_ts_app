import React from "react";
import InputWithLabel from '../../shared/components/InputWithLabel';

interface IProps {
  mail: string,
  setMail: React.Dispatch<React.SetStateAction<string>>,
  username: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>
}

const RegisterPageInputs = ({
  mail,
  setMail,
  username,
  setUsername,
  password,
  setPassword,
}: IProps) => {
  return <>
    <InputWithLabel 
    value={mail}
    setValue={setMail}
    label="E-mail adress"
    type="text"
    placeholder="Enter e-mail adress"
    />
    <InputWithLabel 
    value={username}
    setValue={setUsername}
    label="Username"
    type="text"
    placeholder="Enter username"
    />
    <InputWithLabel 
    value={password}
    setValue={setPassword}
    label="Password"
    type="text"
    placeholder="Enter password"
    />
  </>;
};

export default RegisterPageInputs
