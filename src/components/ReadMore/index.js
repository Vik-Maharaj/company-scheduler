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
  readMoreIsOpen,
  setReadMoreIsOpen,
  serviceData,
  setReservationIsOpen,
}) {
  const { token, setAuthenticationIsOpen } = useContext(UserContext);

  function closeModal() {
    document.body.style.overflow = "unset";
    setReadMoreIsOpen(false);
  }

  function handleReservation() {
    closeModal();
    if (!token) {
      setAuthenticationIsOpen(true);
      document.body.style.overflow = "hidden";
      return;
    }
    setReservationIsOpen(true);
    document.body.style.overflow = "hidden";
    return;
  }

  return (
    <>
      <StyledModal
        isOpen={readMoreIsOpen}
        ariaHideApp={false}
        onRequestClose={() => closeModal()}
        style={modalStyles}
>
      </StyledModal>
    </>
  );
}
