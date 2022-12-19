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

}
