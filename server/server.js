const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const movies = [
  {
    title: 'Back to the Future',
    year: 1998,
  },
  {
    title: 'Matrix Reloaded',
    year: 2003,
  },
  {
    title: 'Princess Mononoke',
    year: 1997,
  },
];

app.use(bodyParser.json());

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.post('/api/movies', (req, res) => {
  const { title, year } = req.body;
  const newMovie = {
    title,
    year,
  };
  movies.push(newMovie);
  res.json(movies);
});

app.post('/api/regsiter', (req, res) => {
  return res.json({ status: 'ok' });
})

app.post('/api/login', (req, res) => {
  return res.json({ status: 'ok' });
})

app.get('/api/logout', (req, res) => {
  return res.json({ status: 'ok' });
})

app.listen(8080, () => {
  console.log('Server started on PORT: 8080');
});
