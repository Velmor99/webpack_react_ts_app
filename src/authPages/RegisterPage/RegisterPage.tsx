import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from "./RegisterPageInputs";
import {validateRegisterForm} from '../../shared/utils/validators';
import {connect} from 'react-redux';
import {getActions} from '../../store/actions/auth.actions';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import { IRegisterDetails } from "../../protocols/auth.types";
import { AppDispatch } from "../../store/store";

interface IProps {
  register(userDetails: IRegisterDetails, history: NavigateFunction): void
}

const RegisterPage = ({register}: IProps) => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate()
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      username,
      password
    };
    register(userDetails, history)
  }

  useEffect(() => {
    setIsFormValid(validateRegisterForm({
        mail,
        username,
        password,
    }))
  }, [mail, username, password, setIsFormValid])

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter 
      handleRegister={handleRegister}
      isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch: AppDispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(RegisterPage);
