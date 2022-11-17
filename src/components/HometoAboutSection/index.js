import {
  Container,
  AboutContainer,
  InfoContainer,
  Title,
  Description,
  Button,
  ProfileImage,
} from "./style";
import { useNavigate } from "react-router-dom";

export default function HomeToAboutSection() {
  const navigate = useNavigate();

  return (
    <Container>
      <AboutContainer>
        <InfoContainer>
          <Title></Title>
          <Description>
          </Description>
          <Button onClick={() => navigate("")}></Button>
        </InfoContainer>
        <ProfileImage src={} alt="" />
      </AboutContainer>
    </Container>
  );
}
