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