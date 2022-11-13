import { Container, FooterLogo, NavButtons, NavButton } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Footer() {
  const { openAuthenticationModal, loadingUserValidation, userIsLoggedIn } =
    useContext(UserContext);

  const navigate = useNavigate();

  return (
    <Container>
      <FooterLogo src={logo} alt="" />
      <NavButtons>
        <NavButton onClick={() => navigate("/")}>Home Page</NavButton>
        <NavButton onClick={() => navigate("/Services")}>Services</NavButton>
        <NavButton onClick={() => navigate("/Contact")}>Contact</NavButton>

        {loadingUserValidation ? (
          <NavButton>
          </NavButton>
        ) : (
          <>
            {userIsLoggedIn ? (
              <NavButton>
              </NavButton>
            )}
          </>
      </NavButtons>
    </Container>
  );
}
