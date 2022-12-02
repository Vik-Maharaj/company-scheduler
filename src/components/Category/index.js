import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import {
  StyledModal,
} from "./style";

export default function Category({
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

  return (
    <StyledModal>
    </StyledModal>
  );
}
