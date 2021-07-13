const express = require('express');
const router = express.Router();
const { ping, testResponse } = require('../controllers/health.controller.js');

router.get('/test', testResponse);

router.get('/healthcheck', ping);

module.exports = router;
