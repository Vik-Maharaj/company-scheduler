import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  InputsForm,
  Input,
  Textarea,
  Button,
  modalStyles
} from "./style";

export default function ServiceModal({
  serviceModalIsOpen,
  setServiceModalIsOpen,
  categoryData,
  serviceData,
  type,
}) {
  const rangeInputValues = [
    "15min",
    "30min",
    "45min",
    "1h"
  ];

  const { token } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [duration, setDuration] = useState("15min");

  useEffect(() => {
    if (type === "edit") {
      setFormData({
        name: serviceData.name,
        price: serviceData.price,
        description: serviceData.description,
      });
      setDuration(serviceData.duration);
    } else {
      setFormData({ name: "", price: "", description: "" });
      setDuration("15min");
    }
  }, [type, serviceModalIsOpen]);

  function closeModal() {
    document.body.style.overflow = "unset";
    setServiceModalIsOpen(false);
    setFormData({
      name: "",
      price: "",
      description: "",
    });
    setDuration("15min");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (type === "create") return createService();
    if (type === "delete") return deleteService();
    if (type === "edit") return editService();
  }

  async function createService() {
    const response = await api.createService(token, categoryData._id, {
      ...formData,
      duration,
    });
    if (response.status === 201) return handleSuccess("success");

    return handleError(response.data);
  }


  function handleError(responseData) {
    if (responseData) return toast.error(responseData);

    return toast.error(
      "Error",
    );
  }

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <StyledModal
      isOpen={serviceModalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-button" onClick={() => closeModal()} />
      {type === "create" && <Title></Title>}
      {type === "edit" && <Title></Title>}
      {type === "delete" && (
        <Title>Are you sure?</Title>
      )}
      <InputsForm>
        {type !== "delete" && (
          <>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              onChange={(e) => handleFormData(e)}
              value={formData.name}
              required
            />
            <Input
              name="price"
              type="text"
              placeholder="Price"
              onChange={(e) => handleFormData(e)}
              value={formData.price}
              required
            />
            <RangeInput>
              <p>Duração: {duration}</p>
              <input
                name="duration"
                type="range"
                min="0"
                max="11"
                placeholder="Duration"
                onChange={(e) => setDuration(rangeInputValues[e.target.value])}
                value={rangeInputValues.indexOf(duration)}
                required
              />
            </RangeInput>
            <Textarea
              name="description"
              type="text"
              placeholder="Description"
              onChange={(e) => handleFormData(e)}
              value={formData.description}
              required
            />
          </>
        )}

        <ActionButtons>
          <Button type="button" onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button onClick={(e) => handleSubmit(e)}>Confirm</Button>
        </ActionButtons>
      </InputsForm>
    </StyledModal>
  );
}
