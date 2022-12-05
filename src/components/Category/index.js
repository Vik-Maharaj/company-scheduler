import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  Input,
  Button,
} from "./style";

export default function CategoryModal({
  categoryModalIsOpen,
  categoryData,
  type,
}) {
  const { token } = useContext(UserContext);

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (type === "edit") {
      setTitle(categoryData.title);
    } else {
      setTitle("");
    }
  }, [type, categoryModalIsOpen]);


  function handleSubmit(e) {
    e.preventDefault();

    if (type === "create") return createCategory();
    if (type === "delete") return deleteCategory();
    if (type === "edit") return editCategory();
  }

  async function createCategory() {
    const response = await api.createCategory(token, { title });
    if (response.status === 201) return handleSuccess("Category");

    return handleError(response.data);
  }

  async function deleteCategory() {
    const response = await api.deleteCategory(token, categoryData._id);
    if (response.status === 200) return handleSuccess("Category");

    return handleError(response.data);
  }

  }


  return (
    <StyledModal
      isOpen={categoryModalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-icon" onClick={() => closeModal()} />
      <InputsForm>
        {type !== "delete" && (
          <Input
            name="title"
            type="text"
            placeholder=""
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        )}

        <ActionButtons>
          <Button type="button" onClick={() => closeModal()}>
          </Button>
          <Button onClick={(e) => handleSubmit(e)}></Button>
        </ActionButtons>
      </InputsForm>
    </StyledModal>
  );