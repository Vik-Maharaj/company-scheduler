import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import {
} from "./style";

export default function ServiceModal({
  categoryData,
  serviceData,
  type,
  renderPage,
}) {
  const rangeInputValues = [
  ];

  const { token } = useContext(UserContext);

  const [formData, setFormData] = useState({
  });



  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
}
