const express = require('express');
const { fetchData } = require('../services/footballApiService');
const router = express.Router();

router.get('/:teamId', async (req, res) => {
  try {
    const { teamId } = req.params;
    const data = await fetchData(`/teams/${teamId}`);
    res.json(data);
  } catch (err) {
    res.status(err.error ? 400 : 500).json(err);
  }
});

module.exports = router;