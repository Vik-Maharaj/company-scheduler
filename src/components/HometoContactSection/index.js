import {
  Container,
  BackgroundImage,
  Title,
  Button,
} from "./style";
import { useNavigate } from "react-router-dom";

export default function HomeToContactUsSection() {
  const navigate = useNavigate();

  return (
    <Container>
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <Title></Title>
      <Button onClick={() => navigate("/contact")}>Contact Us</Button>
    </Container>
  );
}
