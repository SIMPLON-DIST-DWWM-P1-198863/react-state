import { useState } from "react";

const pokemons = [
  "Bulbizarre", //0
  "Herbizarre", // 1
  "Florizarre", // ...
  "Salameche",
  "Reptincel",
  "Dracaufeu",
  "Carapuce",
  "Carabaffe",
  "Tortank",
];
function App() {
  const [counter, setCounter] = useState<number>(0);
  const [favPokemon, setFavPokemon] = useState<string>("Mew");

  const rollD6 = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    setCounter(rollResult);
    setFavPokemon(pokemons[rollResult]);
  };

  return (
    <>
      <p>J'affiche le nombre {counter}</p>
      <button onClick={rollD6}>1D6</button>
      <p>Mon pokemon favori ? {favPokemon}</p>
    </>
  );
}

export default App;
