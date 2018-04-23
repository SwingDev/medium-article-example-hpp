const axios = require('axios');
const express = require('express')
const app = express()


const validTokens = {
  'firstusertoken': 1,
}

function getUserForToken(token) {
  if (validTokens[token]) {
    return validTokens[token];
  }
  return null;
}

app.get('/me', function (req, res) {
  console.log(req.query.token);
  const token = req.query.token;
  let fields = req.query.fields;

  const id = getUserForToken(token);

  if (!id) {
    return res.status(401).send('Unauthorized');
  }
  if (!fields) {
    fields = 'name,surname';
  }
  axios.get('http://iserv:3000/identity?fields=' + fields + '&id=' + id)
    .then(d => {
      console.log(d.data);
      res.json(d.data);
  });
});

app.listen(3000, () => console.log('Server started on 3000'));