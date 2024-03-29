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

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);

    const response = await api.updateUser(token, { phone }, "phone");
    if (response.status === 200) {
      localStorage.setItem("token", response.data);
      setToken(response.data);
      setSubmitIsLoading(false);
      closeModal();
      return;
    }

    handleResponseErrors(response);
    setSubmitIsLoading(false);
    return;
  }

  function handleResponseErrors(response) {
    if (response.status === 409) {
      toast.error(response.data, toastStyles);
      return;
    }

    if (response.status === 422) {
      toast.error(response.data.error, toastStyles);
      return;
    }

    toast.error(
      "Error, update not successful",
      toastStyles
    );
    return;
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

        {submitIsLoading ? (
          <Button type="button" disabled>
            <ThreeDots color="#E1E1E1" height={13} width={51} />
          </Button>
        ) : (
          <Button onClick={(e) => handleSubmit(e)}>Confirm</Button>
        )}
      </InputsForm>
    </StyledModal>
  );
}
