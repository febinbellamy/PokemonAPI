const express = require('express');
const app = express();
const pokemonRoutes = require("./routes/pokemon");

const port = 3500;

app.use(express.json()) 

app.get('/', (req, res) => res.send('Welcome to the RESTful Pokémon API!'));

app.use('/pokemon', pokemonRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// app.get('*', (req, res) => {
//   res.send(`I don't know that path!`)
//   // catch all error handler
// })