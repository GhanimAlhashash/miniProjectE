const Book = require("../../models/BookSchema");

exports.booksCreate = async (req, res, next) => {
  try {
    if (req.file)
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

exports.booksDelete = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      await foundBook.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Book is no where to be found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.booksUpdate = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    if (req.file)
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      await foundBook.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "book no where to be found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.booksGet = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    next(error);
  }
};
