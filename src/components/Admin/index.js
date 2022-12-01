import {
  Container,
  Buttons,
} from "./style";

export default function Admin({
  setCategoryData,  
}) {

  function openCategoryModal(category) {
    setCategoryModalIsOpen(true);
    setCategoryData(category);
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <Container>
        <Buttons>
        </Buttons>
      </Container>
    </>
  );
}
