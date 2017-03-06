var express = require('express');
// console.log(express)
var app = express();
app.use(express.static('./dist'));

app.get('/', function (req, res) {
  res.send('Hello, you now can create emails. Have fun!');
})

app.listen(9000, function () {
  console.log('MJML app is listening on port 9000!');
})
