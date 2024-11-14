"use strict";

document.getElementById("searchInput").addEventListener("input", pretrazi);

function pretrazi() {
  const search = document.getElementById("searchInput").value;

  if (!search) {
    ocisti();
    return;
  }

  const link = `https://itunes.apple.com/search?media=music&entity=song&term=${search}`;

  fetch(link)
    .then((res) => res.json())
    .then((data) => rezultat(data.results))
    .catch((error) => console.error("Error:", error));
}

function ocisti() {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
}

function rezultat(rezultat) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (rezultat.length === 0) {
    resultsContainer.innerHTML = "<p>Nema rezultata.</p>";
    return;
  }

  rezultat.forEach((result) => {
    const rez = document.createElement("div");
    rez.innerHTML = `
        <h2>${result.trackName}</h2>
        <p>${result.artistName}</p>
        <img src="${result.artworkUrl100}" alt="${result.trackName}">
        <p>${result.collectionName}</p>
        <hr>
      `;
    resultsContainer.appendChild(rez);
  });
}
