import {
  Container,
  Title,
  StyledScrollContainer,
  Comment,
  Description,
  Author,
} from "./style";
import { useState } from "react";
import commentsArray from "../../data/CommentsSection";

export default function CommentsSection() {
  const [cursorStyle, setCursorStyle] = useState("pointer");

  return (
    <Container>
      <Title>Comments</Title>
      <Spacer />
      <StyledScrollContainer>
      </StyledScrollContainer>
    </Container>
  );
}
