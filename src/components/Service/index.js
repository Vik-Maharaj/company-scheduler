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



  return (
    <StyledModal>
    </StyledModal>
  );
}
