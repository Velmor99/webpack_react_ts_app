import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
    return 'Enter correct e-mail adress and password should contans between 6 and 12 characters'
}

const getFormValidMessage = () => {
    return 'Press to sign up';
}

interface IProps {
  handleRegister(): void,
  isFormValid: boolean
}

const RegisterPageFooter = ({ handleRegister, isFormValid }: IProps) => {
  const history = useNavigate();

  const handlePushToLoginPage = () => {
    history("/login");
  };
  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
    >
    <div>
        <CustomPrimaryButton
          label="Sign up"
          additionalStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleRegister}
        />
      </div>
    </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
