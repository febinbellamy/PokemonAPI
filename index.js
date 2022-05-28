const express = require('express');
const app = express();
const port = 3500;
const morgan = require('morgan');
const pokemonRoutes = require("./routes/pokemon");
app.use(express.json()) 
app.use(morgan('dev'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>Welcome to the RESTful Pokemon API!</h1></body></html>");
  });

app.use('/pokemon', pokemonRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// app.all("*", (req, res, next) => {
//     next(new ExpressError("Page Not Found", 404));
//   });
  