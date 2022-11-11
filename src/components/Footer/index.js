import { Container, FooterLogo, NavButtons, NavButton } from "./style";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Footer() {
  const { openAuthenticationModal, loadingUserValidation, userIsLoggedIn } =
    useContext(UserContext);


  return (
    <Container>
      <FooterLogo src={logo} alt="" />
      <NavButtons>

      </NavButtons>
    </Container>
  );
}
