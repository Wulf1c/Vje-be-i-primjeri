import { useState } from "react";
import Detalji from "./Detalji";

const PretražiKorisnika = () => {
  const [korisnikData, setkorisnikData] = useState(null);
  const [tekst, setTekst] = useState("");
  const [repo, setRepo] = useState([]);

  const handleChange = (e) => {
    setTekst(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tekst === "") {
      alert("Unesite pojam u tražilicu");
    } else {
      try {
        const userRes = await fetch(`https://api.github.com/users/${tekst}`);
        const userData = await userRes.json();
        setkorisnikData(userData);

        const repoRes = await fetch(userData.repos_url);
        const repoData = await repoRes.json();
        setRepo(repoData);
      } catch (error) {
        console.error("Greška pri dohvaćanju", error);
      }
      setTekst("");
    }
  };

  const handleReset = () => {
    setkorisnikData(null);
    setRepo([]);
  };

  return (
    <div className="pretrazi">
      <div className="inputForma">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Unesite korisničko ime"
            onChange={handleChange}
            value={tekst}
          />
          <button type="submit">Search</button>
        </form>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {korisnikData && <Detalji korisnikData={korisnikData} repos={repo} />}
    </div>
  );
};

export default PretražiKorisnika;
