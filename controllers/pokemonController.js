const axios = require("axios");

class PokemonController {
  checkPrime(num) {
    let isPrime = true;
    for (let i = 2; i <= 150; i++) {
      if (i !== num && num % i == 0) {
        isPrime = false;
      }
    }

    return isPrime;
  }

  async getPokemonData(req, res) {
    const pokemonData = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=300"
    );

    const filteredData = pokemonData.data.results
      .map((item, i) => {
        const id = i + 1;
        if (this.checkPrime(id)) {
          const data = {
            pokemon: item.name,
            id: id,
          };
          return data;
        }
      })
      .filter((item) => {
        if (item !== null) {
          return item;
        }
      });

    res.status(200).json(filteredData);
  }
}

module.exports = PokemonController;
