// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views')

var lists = ['Đi làm','Nấu cơm','Rửa chén','Học codersX']

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});

app.get('/todos', (req, res) => {
  var q = req.query.q ;
  if(q){
    var matchLList = lists.filter(function(list){
    return list.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
  }
  else
    {
      var matchLList = lists
    }
  res.render('index',{
    listToDo : matchLList
  });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
