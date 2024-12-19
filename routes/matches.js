const express = require('express');
const { fetchData } = require('../services/footballApiService');
const router = express.Router();

router.get('/:competitionId', async (req, res) => {
  try {
    const { competitionId } = req.params;
    const data = await fetchData(`/competitions/${competitionId}/matches`);
    res.json(data);
  } catch (err) {
    res.status(err.error ? 400 : 500).json(err);
  }
});

module.exports = router;