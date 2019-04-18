const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const testRouter = require('./routes/test');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.json('Welcome to my Lyft code sample!');
});

app.use('/test', testRouter);

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.toString() });
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});