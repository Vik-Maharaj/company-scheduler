import {
  Container,
  InfosContainer,
  Info,
  Image,
  Title,
  Description,
} from "./style";

export default function ContactInfo() {

  return (
    <Container>
      <InfosContainer>
        <Info>
          <Image src={location} alt="" />
          <Title></Title>
          <Description>

          </Description>
        </Info>
        <Info>
          <Image src={contact} alt="" />
          <Title></Title>
        </Info>
        <Info>
          <Image src={schedule} alt="" />
          <Title></Title>
          <Description>
          </Description>
        </Info>
      </InfosContainer>
    </Container>
  );
}
