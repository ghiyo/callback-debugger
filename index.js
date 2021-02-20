const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/callback', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  console.log(req.params);
  res.sendStatus(200);
})

app.get('/', (req, res) => {
  res.send('Success');
})

app.listen(port, () => {
  console.log(`Callback debugger listening at http://localhost:${port}`);
})