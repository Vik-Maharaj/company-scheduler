import {
  StyledModal,
  ModalHeader,
  Title,
  Description
} from "./style";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ReadMore({
  setReadMoreIsOpen,
}) {
  const { token, setAuthenticationIsOpen } = useContext(UserContext);

  function closeModal() {
    document.body.style.overflow = "unset";
    setReadMoreIsOpen(false);
  }

}
