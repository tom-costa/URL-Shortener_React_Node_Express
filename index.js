// Initialising variables with all the 'requires'
const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const app = express();


// hard coded creds and details probably should be environment variables passed in from to docker-compose
mongoose.connect('mongodb://mongo:27017/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
});


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT);