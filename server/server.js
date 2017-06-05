const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error : 'Page not found.',
    name : 'Test App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name : 'Mike',
    age : 29
  },{
    name : 'Rahul',
    age : 27
  },{
    name : 'Rustom',
    age : 30
  }]);
});

app.listen(3000);

module.exports.app = app;
