import TextInput from "./TextInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/UserSlice";
import { v4 as uuidv4 } from "uuid";

const UserAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [podaci, setPodaci] = useState({
    ime: "",
    email: "",
  });

  const handleUser = () => {
    setPodaci({ ime: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        ime: podaci.ime,
        email: podaci.email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <TextInput
        label="ime"
        value={podaci.ime}
        onChange={(e) => setPodaci({ ...podaci, ime: e.target.value })}
        inputProps={{ type: "text", placeholder: "ime" }}
      />
      <TextInput
        label="email"
        value={podaci.email}
        onChange={(e) => setPodaci({ ...podaci, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "email" }}
      />
      <button onClick={handleUser}>Dodaj korisnika</button>
    </div>
  );
};

export default UserAdd;
