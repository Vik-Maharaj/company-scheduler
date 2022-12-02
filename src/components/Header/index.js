import {
  Container,
  BackgroundImage,
  HeaderDiv,
  NavButtons,
  NavButton,
  About
} from "./style";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function HeaderSection({ page, title }) {
  const {
    setToken,
  } = useContext(UserContext);

  const navigate = useNavigate();

  function navigateToPage(page) {
    setProfileTabIsOpen(false);
    navigate(page);
  }

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

      <ResponsiveHeader
        profileTabIsOpen={profileTabIsOpen}
        setProfileTabIsOpen={setProfileTabIsOpen}
        logout={logout}
      />

<HeaderDiv>
        {profileTabIsOpen && (
          <MenuContainer>
            {userIsAdmin && (
              <ProfileButton onClick={() => navigateToPage("/admin")}>
              </ProfileButton>
            )}
            <ProfileButton onClick={() => navigateToPage("/config")}>
            </ProfileButton>
            <ProfileButton onClick={() => navigateToPage("/reservas")}>
            </ProfileButton>
            <ProfileButton onClick={() => logout()}>Sair</ProfileButton>
          </MenuContainer>
        )}
        <LogoImage onClick={() => navigate("/")} src={logo} alt="" />
        <NavButtons>
          <NavButton onClick={() => navigate("/")}></NavButton>
          <NavButton onClick={() => navigate("/servicos")}></NavButton>
          <NavButton onClick={() => navigate("/sobre")}></NavButton>
          <NavButton onClick={() => navigate("/contato")}></NavButton>

          {loadingUserValidation ? (
            <NavButton>
            </NavButton>
          ) : (
            <>
              {userIsLoggedIn ? (
                <NavButton
                  onClick={() => setProfileTabIsOpen(!profileTabIsOpen)}
                >
                  <BsPersonCircle className="login-icon" />
                  <p></p>
                </NavButton>
              ) : (
                <NavButton onClick={() => openAuthenticationModal()}>
                  <BsPersonCircle className="login-icon" />
                  <p></p>
                </NavButton>
              )}
            </>
          )}
        </NavButtons>
      </HeaderDiv>

      {page === "home" ? (
        <>
          <About page={page}>
            <br />
            <span></span>
          </About>
        </>
      ) : (
        <About>{title}</About>
      )}
    </Container>
  );
}
