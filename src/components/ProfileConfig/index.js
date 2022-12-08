import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import {
  Container,
  Title,
  InputContainer,
} from "./style";

export default function ProfileConfigSection({ setDeleteAccountModalIsOpen }) {
  const { userData, setUserData, token } = useContext(UserContext);


  return (
    <Container>
      <Title>Profile</Title>
      <InputContainer>
        <FieldName>Name</FieldName>
        <Input
          placeholder={change === "name" ? "" : userData?.name}
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={change === "name" && !isLoading ? false : true}
        />
        <Action onClick={() => changeInformation("name")}>
          {change === "name" ? (
          )}
        </Action>
      </InputContainer>
      <InputContainer>
        <FieldName>Phone</FieldName>
        <StyledNumberFormat
          placeholder={change === "phone" ? "" : userData?.phone}
          onChange={(e) => setPhone(e.target.value)}
          format={"(##) #####-####"}
          value={phone}
          disabled={change === "phone" && !isLoading ? false : true}
        />
        <Action onClick={() => changeInformation("phone")}>
          {change === "phone" ? (
            isLoading ? (
          )}
        </Action>
      </InputContainer>

    </Container>
  );
}
