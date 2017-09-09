const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors())

app.listen(2023, () => console.log('LISTENING PORT NUMBER 2023'));

app.get('/api/listings', (req, res) => {
  let modelData = axios.get('https://api.agent.com/public/profiles', { headers: {'x-authorization': '38Bh)8c^7/D+(t$9%?6q[{WAsReEkqDH' }})
    .then(data => {
      res.status(200).send(data.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
