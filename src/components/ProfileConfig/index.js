import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  Container,
  Title,
  InputContainer,
  FieldName,
  Input,
  Action,
  DeleteAccount,
} from "./style";

export default function ProfileConfigSection({ setDeleteAccountModalIsOpen }) {
  const { userData, setUserData, token } = useContext(UserContext);

  const [change, setChange] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function changeInformation(field) {
    if (change === field) {
      setIsLoading(true);
      setChange("");
      if (field === "name") {
        const response = await api.updateUser(token, { name }, "name");
        if (response.status === 200) setUserData({ ...userData, name });

        handleResponse(response);
        return;
      }

      if (field === "phone") {
        const response = await api.updateUser(token, { phone }, "phone");
        if (response.status === 200) setUserData({ ...userData, phone });
        handleResponse(response);
        return;
      }

      return;
    }

    setName("");
    setPhone("");
    setChange(field);
  }

      <InputContainer>
        <DeleteAccount onClick={() => openConfirmation()}>
          Contact
        </DeleteAccount>
      </InputContainer>
    </Container>
  );
}
