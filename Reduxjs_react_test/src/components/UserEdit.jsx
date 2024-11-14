import TextInput from "./TextInput";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../redux/UserSlice";

const UserEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const selectedUser = users.filter((user) => user.id === params.id);
  const { ime, email } = selectedUser[0];
  const [podaci, setPodaci] = useState({
    ime: ime,
    email: email,
  });

  const handleEditUser = () => {
    setPodaci({ ime: "", email: "" });
    navigate("/");
    dispatch(
      editUser({
        id: params.id,
        ime: podaci.ime,
        email: podaci.email,
      })
    );
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
      <button onClick={handleEditUser}>Promijeni korisnika</button>
    </div>
  );
};

export default UserEdit;
