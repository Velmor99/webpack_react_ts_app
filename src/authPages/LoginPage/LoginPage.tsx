import React, { useState, useEffect} from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import {validateLoginForm} from '../../shared/utils/validators';
import {connect} from 'react-redux';
import {getActions} from '../../store/actions/auth.actions';
import {useNavigate} from 'react-router-dom';
import { IAuthActions } from "../../protocols/auth.types";
import { Dispatch } from "@reduxjs/toolkit";
import { ISetUserDetails } from "../../protocols/authActions.types";
import { IOpenAlertMessage } from "../../protocols/alertActions.types";

const LoginPage = ({login}: IAuthActions) => {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useNavigate()

  useEffect(() => {
    setIsFormValid(validateLoginForm({mail, password}));
  }, [mail, password, setIsFormValid])

  const handleLogin = () => {
    const userDetails = {
      mail,
      password
    }
    login(userDetails, history)
  };

  return (
    <AuthBox>
      <LoginPageHeader></LoginPageHeader>
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch: Dispatch<ISetUserDetails | IOpenAlertMessage>) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(LoginPage);
