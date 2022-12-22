import {
  Container,
  Buttons,
  Category,
  AdminCategory,
  Title,
  AdminCategoryIcons,
  Services,
  Service,
} from "./style";

export default function Admin({
  categoriesArray,
  setServiceData,
  setCategoryData,
}) 
{
  function handleCategoryAction(category, action) {
    setCategoryModalType(action);
    openCategoryModal(category);
  }

  function openCategoryModal(category) {
    setCategoryModalIsOpen(true);
    setCategoryData(category);
    document.body.style.overflow = "hidden";
  }

  function openCategoryModal(category) {
    setCategoryModalIsOpen(true);
    setCategoryData(category);
    document.body.style.overflow = "hidden";
  }

  function openServiceModal(category, service) {
    setServiceModalIsOpen(true);
    setCategoryData(category);
    setServiceData(service);
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
