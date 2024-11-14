const upload = require("../../middleware/multer");
const express = require("express");
const router = express.Router();
const {
  booksGet,
  booksUpdate,
  booksDelete,
  booksCreate,
} = require("./books.controller");

router.get("/", booksGet);
router.post("/", upload.single("image"), booksCreate);

router.delete("/:bookId", booksDelete);

router.put("/:bookId", upload.single("image"), booksUpdate);

module.exports = router;
