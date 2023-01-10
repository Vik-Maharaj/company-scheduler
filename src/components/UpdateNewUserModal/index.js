import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import NumberFormat from "react-number-format";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  InputsForm,
  Button,
  modalStyles,
  toastStyles,
} from "./style";

export default function UpdateNewUserModal() {
  const { token, setToken, userIsNewUser, setUserIsNewUser } =
    useContext(UserContext);

  const [phone, setPhone] = useState("");
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  function closeModal() {
    document.body.style.overflow = "unset";
    setUserIsNewUser(false);
  }

  }

  return (
    <StyledModal isOpen={userIsNewUser} ariaHideApp={false} style={modalStyles}>
      <Title>
        Please enter your phone number
      </Title>
      <InputsForm>
        <NumberFormat
          type="text"
          placeholder="Cell Phone"
          format={"(###) ###-####"}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
  );
