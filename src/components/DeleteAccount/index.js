import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  ActionButtons,
  Button,
  modalStyles,
} from "./style";

export default function DeleteAccount({
  deleteAccountlIsOpen,
  setDeleteAccountIsOpen,
}) {
  const { token, setToken } = useContext(UserContext);

  const navigate = useNavigate();

  function closeModal() {
    document.body.style.overflow = "unset";
    setDeleteAccountlIsOpen(false);
  }

  function handleSubmit() {
    deleteAccount();
    return;
  }

  async function deleteAccount() {
    const response = await api.deleteAccount(token);
    if (response.status === 200) {
      closeModal();
      clearToken();
      navigate("/");
      return toast.success("Delete Successful");
    }

    return handleError(response.data);
  }

  function handleError(responseData) {
    if (responseData) return toast.error(responseData, toastStyles);

    return toast.error(
      "Error, request not completed",
      toastStyles
    );
  }

  function clearToken() {
    localStorage.removeItem("token");
    setToken(null);
  }
}
