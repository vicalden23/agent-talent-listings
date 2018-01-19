const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors())

app.listen(process.env.PORT || 2023, () => console.log('LISTENING PORT NUMBER 2023'));

app.get('/api/listings', (req, res) => {
  let modelData = axios.get('https://api.agent.com/public/profiles', { headers: {'x-authorization': 'api key' }})
    .then(data => {
      res.status(200).send(data.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get('/api/listings/:id', (req, res) => {
  let modelData = axios.get('https://api.agent.com/public/profiles', { headers: {'x-authorization': 'api key' }})
    .then(data => {
      var index = Number(req.url.substr(14, req.url.length - 1))
      res.status(200).send(data.data.users[index]);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
