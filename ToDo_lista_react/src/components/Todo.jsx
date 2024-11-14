import { useState } from "react";
import { observer } from "mobx-react-lite";

const Todo = ({ store }) => {
  const [inputUpis, setInputUpis] = useState("");

  const inputZadatak = (e) => {
    setInputUpis(e.target.value);
  };

  const dodajZadatak = (e) => {
    e.preventDefault();
    store.dodaj(inputUpis);
    setInputUpis("");
  };

  return (
    <>
      <form>
        <input type="text" value={inputUpis} onChange={inputZadatak} />
        <button onClick={dodajZadatak}>Pošalji</button>
      </form>
      {store.lista.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </>
  );
};

export default observer(Todo);
