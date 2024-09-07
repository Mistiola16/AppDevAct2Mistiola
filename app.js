const express = require('express');
const app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}! Your form was submitted successfully.`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
