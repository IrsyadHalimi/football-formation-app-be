const express = require('express');
const { fetchData } = require('../services/footballApiService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await fetchData('/areas');
    res.json(data);
  } catch (err) {
    res.status(err.error ? 400 : 500).json(err);
  }
});

module.exports = router;