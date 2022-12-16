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
    <StyledModal>
    </StyledModal>
  );
}
