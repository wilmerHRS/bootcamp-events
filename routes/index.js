const express = require('express');
const router = express.Router();
const eventRoute = require('./event.routes');
const bookRoute = require('./book.routes');

router.use("/events", eventRoute);
router.use("/books", bookRoute);

module.exports = router;