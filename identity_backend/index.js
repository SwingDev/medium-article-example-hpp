const express = require('express')
const app = express()

const identities = require('./identities.json');

function filterFields(obj, fields) {
  if (fields === '*') {
    return obj
  }
  let result = {};
  fields.split(',').forEach(field => {
    result[field] = obj[field];
  });
  return result;
}

app.get('/identity', function (req, res) {
  const id = parseInt(req.query.id, 10);
  const fields = req.query.fields;
  const identity = identities.find(identityObject => identityObject.id === id);
  return res.json(filterFields(identity, fields));
});

app.listen(3000, () => console.log('Server started on 3000'));