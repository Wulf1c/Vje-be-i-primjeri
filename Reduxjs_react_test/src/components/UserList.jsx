import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const removeUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <div key={user.id}>
        <div>
          <h2>{user.ime}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <Link to={`edit-user/${user.id}`}>
            <FaEdit />
          </Link>
          <FaTrash onClick={() => removeUser(user.id)} />
        </div>
      </div>
    ));

  return (
    <>
      <Link to="/add-user">
        <button>Dodaj novog korisnika</button>
      </Link>
      <div>{users.length ? renderCard() : <p>Nema korisnika</p>}</div>
    </>
  );
};

export default UserList;
