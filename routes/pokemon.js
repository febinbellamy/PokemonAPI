const express = require("express");
const app = express();
const router = express.Router();
const data = require('../data');
let pokemon = data;

router.get("/", (req, res) => { // get all available pokemon
    res.send(pokemon);
});

// get single pokemon by ID
router.get('/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const singlePokemon = pokemon.results.find((pokemon) => pokemon.id === id);
    res.send(singlePokemon);
})

module.exports = router;
