const Book = require("../../models/BookSchema");

const findBook = async function (req, res, next, bookSlug) {
  let foundBook;

  try {
    foundBook = await Book.findOne({ slug: bookSlug });
    if (!foundBook) {
      const error = new Error("book not found");
      error.status = 404;
      return next(error);
    }
  } catch (error) {
    next(error);
  }

  req.post = foundBook;
  next();
};

module.exports = findBook;
