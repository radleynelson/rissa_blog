const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post('/api/AddSubscriber', (req, res) => {
  let newUser = req.body;
  console.log(newUser);
  res.send('Success');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
