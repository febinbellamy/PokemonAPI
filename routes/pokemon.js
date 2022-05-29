const express = require("express");
const app = express();
const pokemonRouter = express.Router();
const pokemon = require("../data");

pokemonRouter
  .route("/")
  // get all available pokemon
  .get((req, res) => {
    res.send(pokemon);
  })

  // update all available pokemon
  .put((req, res) => {
    res.statusCode = 403;
    res.send("PUT operation not supported!");
  })

  // delete all available pokemon
  .delete((req, res) => {
    res.statusCode = 403;
    res.send("DELETE operation not supported!");
  })

  // create new pokemon
  .post((req, res) => {
    res.statusCode = 403;
    res.send("POST operation not supported!");
  });

pokemonRouter
  .route("/:id")
  // get single pokemon by ID
  
  .get((req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const singlePokemon = pokemon.results.find((pokemon) => pokemon.id === id);
    res.send(singlePokemon);
  })

  // update a single pokemon by ID
  .put((req, res) => {
    res.statusCode = 403;
    res.send("PUT operation not supported!");
  })

  // delete a single pokemon by ID
  .delete((req, res) => {
    res.statusCode = 403;
    res.send("DELETE operation not supported!");
  })

  // create a single pokemon
  .post((req, res) => {
    res.statusCode = 403;
    res.send("POST operation not supported!");
  });

module.exports = pokemonRouter;
