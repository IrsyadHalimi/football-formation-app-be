require('dotenv').config();
const express = require('express');
const competitionsRoute = require('./routes/competitions');
const teamsRoute = require('./routes/teams');
const matchesRoute = require('./routes/matches');
const playersRoute = require('./routes/players');
const areasRoute = require('./routes/areas');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

// Routes
app.use('/v4/competitions', competitionsRoute);
app.use('/v4/teams', teamsRoute);
app.use('/v4/matches', matchesRoute);
app.use('/v4/players', playersRoute);
app.use('/v4/areas', areasRoute);

app.use('/', (req, res) => {
  res.send('Football API Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://locahost:${PORT}`);
});