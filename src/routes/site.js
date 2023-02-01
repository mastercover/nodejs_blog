const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
// siteController.index

router.use('/search', siteController.search);
router.use('/flower', siteController.flower);
router.use('/', siteController.index);

module.exports = router;
