import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import {
  Container,
} from "./style";

export default function ProfileConfigSection({ setDeleteAccountModalIsOpen }) {
  const { userData, setUserData, token } = useContext(UserContext);


  return (
    <Container>

    </Container>
  );
}
