const express = require('express');

const accountRouter = require('./accounts');

const groupRouter = require('./groups');

const router = express.Router();

router.use('/accounts',accountRouter);

router.use('/groups',groupRouter);

module.exports = router