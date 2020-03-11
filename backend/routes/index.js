const express = require('express');
const router = express.Router();
const mainController = require('../controllers/link.js');
const analyticsController = require('../controllers/analytics.js');
const pj = require('../package.json');

/* GET home page. */
router.route('/info').get((req, res) => {
  res.status(200).json({ name: pj.name, version: pj.version});
});

/* Create a short URL */
router.route('/').get(mainController.getAll).post(mainController.saveUrl);

router.route("/analytics").get(analyticsController.getAll);
router.route("/analytics/:code").get(analyticsController.getAnalytics);

/* Get original URL */
router.route('/:code').get(mainController.getUrl);

module.exports = router;