import {
  Container,
  BackgroundImage
} from "./style";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function HeaderSection({ page, title }) {
  const {
    setToken,
  } = useContext(UserContext);

  function logout() {
    navigate("/");
    setProfileTabIsOpen(false);
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <Container page={page}>
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />
      </NavButtons>
);

}
