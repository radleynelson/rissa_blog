const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post('/api/AddSubscriber', (req, res) => {
  let newUser = req.body;
  console.log(newUser);
  var email = req.body.email; //Email entered
  var dataCenter = 'us19';
  var apiKey = 'e77668ae7cade38e21ed448e32a064af-us19';
  var listID = '748aa73022';
  //var options = {
  //   url: `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listID}/members`,
  //   method: 'POST',
  //   headers: { 'content-type': 'application/json', 'Authorization': `apikey ${apiKey}` },
  //   body: JSON.stringify({ email_address: email, status: 'subscribed' })
  // };
  // // Make a simple POST call to MailChimp
  // request(options, function (error, response, body) {
  //   try {
  //     var respObj = {}; //Initial response object
  //     if (response.statusCode === 200) {
  //       respObj = { success: `Subscribed using ${email}!`, message: JSON.parse(response.body) };
  //     } else {
  //       respObj = { error: `Error trying to subscribe ${email}. Please try again.`, message: JSON.parse(response.body) };
  //     }
  //     res.send(respObj);
  //   } catch (err) {
  //     var respErrorObj = { error: 'There was an error with your request', message: err.message };
  //     res.send(respErrorObj);
  //   }
  // });

  axios.post(`https://${dataCenter}.api.mailchimp.com/3.0/lists/${listID}/members`,{headers: {
            'content-type': 'application/json',
            'Authorization': `apikey ${apiKey}`
          },body: JSON.stringify({ email_address: email, status: 'subscribed' })}).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err);
          })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
