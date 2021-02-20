const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/callback', (req, res) => {
  console.log(`Body:\n-----\n${JSON.stringify(req.body, null, 2)}\n`);
  console.log(`Query:\n-----\n${JSON.stringify(req.query, null, 2)}\n`);
  console.log(`Params:\n-----\n${JSON.stringify(req.params, null, 2)}`);
  console.log('-----------------------------------------------------------');
  res.sendStatus(200);
})

app.get('/', (req, res) => {
  res.send('Success');
})

app.listen(port, () => {
  console.log(`Callback debugger listening at http://localhost:${port}`);
})