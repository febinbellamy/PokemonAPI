const express = require("express");
const app = express();
const port = 3500;
const morgan = require("morgan");
const pokemonRouter = require("./routes/pokemon");
const ExpressError = require("./utilities/ExpressError");

app.use(express.json());
app.use(morgan("dev"));

app.use("/pokemon", pokemonRouter);

app.get('/',(req, res) => {
  res.send("Welcome to the RESTful Pokemon API!");
});

app.all("*", (req, res, next) => {
   next(new ExpressError("Page Not Found", 404));
 });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

