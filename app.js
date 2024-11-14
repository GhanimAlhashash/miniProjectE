const express = require("express");
const app = express();
const path = require("path");
const handleErrors = require("./middleware/handleErrors");
const booksRoutes = require("./api/books/books.routes");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./database");
app.use(morgan("dev"));
app.use(cors());
connectDb();
app.use(express.json());
app.use("/books", booksRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.all("*", (req, res) => {
  res.status(404).json({ message: `${req.method}${req.url}: Route not found` });
});

app.use(handleErrors);

app.listen(8003, () => {
  console.log("The application is running on localhost:8003");
});
