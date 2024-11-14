import React from "react";

const Detalji = ({ korisnikData, repos }) => {
  return (
    <div className="detalji">
      <h2>Podaci o korisniku</h2>
      <img src={korisnikData.avatar_url} alt="avatar" />
      <p>Korisničko ime: {korisnikData.name}</p>
      <p>Lokacija: {korisnikData.location}</p>
      <p>Opis: {korisnikData.bio}</p>
      <h3>Repozitoriji:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detalji;
