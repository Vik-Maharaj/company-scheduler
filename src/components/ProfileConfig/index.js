import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  Container,
  Title,
  InputContainer,
  FieldName,
  Input,
  Action,
  DeleteAccount,
} from "./style";

export default function ProfileConfigSection({ setDeleteAccountModalIsOpen }) {
  const { userData, setUserData, token } = useContext(UserContext);

  const [change, setChange] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function changeInformation(field) {
    if (change === field) {
      setIsLoading(true);
      setChange("");
      if (field === "name") {
        const response = await api.updateUser(token, { name }, "name");
        if (response.status === 200) setUserData({ ...userData, name });

        handleResponse(response);
        return;
      }

      if (field === "phone") {
        const response = await api.updateUser(token, { phone }, "phone");
        if (response.status === 200) setUserData({ ...userData, phone });
        handleResponse(response);
        return;
      }

      return;
    }

    setName("");
    setPhone("");
    setChange(field);
  }

  function handleResponse(response) {
    setIsLoading(false);
    setName("");
    setPhone("");
    if (response.status === 200) {
      return;
    }

    toast.error(
      "Error",
      toastStyles
    );
    return;
  }

  function openConfirmation() {
    setDeleteAccountModalIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  return (
    <Container>
      <Title>Contact Details</Title>
      <InputContainer>
        <FieldName>Nome</FieldName>
        <Input
          placeholder={change === "name" ? "" : userData?.name}
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={change === "name" && !isLoading ? false : true}
        />
    
      </InputContainer>
      <InputContainer>
        <FieldName>Mobile</FieldName>
        <StyledNumberFormat
          placeholder={change === "phone" ? "" : userData?.phone}
          onChange={(e) => setPhone(e.target.value)}
          format={"(##) #####-####"}
          value={phone}
          disabled={change === "phone" && !isLoading ? false : true}
        />
        <Action onClick={() => changeInformation("phone")}>
          {change === "phone" ? (
            isLoading(
              "Primary"
            )
          ) : (
            "Alternate"
          )}
        </Action>
      </InputContainer>
      <InputContainer>
        <FieldName>Name</FieldName>
        <Input placeholder="Alternate" disabled />
        <Action onClick={() => sendRecuperationEmail()}>Alternate</Action>
      </InputContainer>

      <InputContainer>
        <DeleteAccount onClick={() => openConfirmation()}>
          Contact
        </DeleteAccount>
      </InputContainer>
    </Container>
  );
}
