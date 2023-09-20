var fs = require('fs');
var express = require("express");
var sqlite3 = require('sqlite3').verbose();

//Used to parse the body in POST request
var bodyParser = require('body-parser');
const { json } = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (request, response) {

});


// app.get('/api/v1/horses', function (req, response) {
//     fs.readFile( __dirname + "/" + "horses.json", 'utf8', function (err, data) {
//        console.log( data );
//        response.setHeader('Content-type', 'application/json'); //Send content-type so the client knows that we send JSON data
//        response.end(data);
//     });
//  })

app.get('/api/v1/horses', function (request, response) {

  //1 - Open to SQLite database
  let db = new sqlite3.Database('./database/HorseManagement.db', sqlite3.OPEN_READONLY, (error) => {
    if (error) {
      console.error(error.message);
      return;
    }
    console.log('Connected to Horse Management DB.');

  });

  //2 - Select data from Horse table and send in response stream
  db.all("SELECT rowid as Rowid, * FROM Horse;", function (error, rows) {
    if (error) {
      console.error(error.message);
      return;
    }
    response.setHeader('Content-type', 'application/json'); //Send content-type so the client knows that we send JSON data
    response.end(JSON.stringify(rows));
    db.close();

  });;
})

app.get('/api/v1/horses/:rowid', function (request, response) {

  //1 - Open to SQLite database
  let db = new sqlite3.Database('./database/HorseManagement.db', sqlite3.OPEN_READONLY, (error) => {
    if (error) {
      console.error(error.message);
      return;
    }
    console.log('Connected to Horse Management DB.');

  });

  var rowid = request.params.rowid;
  var sqlQuery = "SELECT rowid as Rowid, * FROM Horse where rowid = " + rowid;

  //2 - Select data from Horse table and send in response stream
  db.get(sqlQuery, function (error, rows) {
    if (error) {
      console.error(error.message);
      return;
    }
    response.setHeader('Content-type', 'application/json'); //Send content-type so the client knows that we send JSON data
    response.end(JSON.stringify(rows));
    db.close();
  });
})


app.post('/api/v1/horses/:rowid', function (request, response) {

  //1 - Open to SQLite database
  let db = new sqlite3.Database('./database/HorseManagement.db', sqlite3.OPEN_READWRITE, (error) => {
    if (error) {
      console.error(error.message);
      return;
    }

  });

  let data = [];
  let sqlQuery = '';
  console.log('rowid: ' + request.body.rowid);
  if (request.body.rowid == null) //We need to create a horse
  {
    console.log('In create');
    data = [request.body.age, request.body.name, request.body.description, request.body.weight, request.body.numbersOfPodiums, request.body.coatColor, request.body.pictureLink];
    sqlQuery = "INSERT INTO Horse (Age, Name, Description, Weight, NumbersOfPodiums, CoatColor, PictureLink) VALUES (?, ?, ?, ?, ?, ?, ?);";
  }
  else {
    console.log('In update');
    data = [request.body.age, request.body.name, request.body.description, request.body.weight, request.body.numbersOfPodiums, request.body.coatColor, request.body.pictureLink, request.body.rowid];
    sqlQuery = "UPDATE Horse SET Age = ?, Name = ?, Description = ?, Weight = ?, NumbersOfPodiums = ?, CoatColor = ?, PictureLink = ? Where rowid = ?";
  }

  db.run(sqlQuery, data, function (result, error) {
    if (error) {
      return console.error(error.message);
    }

    db.close();

    var payload = {
      "Rowid": this.lastID
    };

    response.setHeader('Content-type', 'application/json'); //Send content-type so the client knows that we send JSON data
    response.end(JSON.stringify(payload));
  });
})

app.delete('/api/v1/horses/:rowid', function (request, response) {

  //1 - Open to SQLite database
  let db = new sqlite3.Database('./database/HorseManagement.db', sqlite3.OPEN_READWRITE, (error) => {
    if (error) {
      console.error(error.message);
      return;
    }

  });

  let sqlQuery = '';
  console.log('rowid: ' + request.params.rowid);

  console.log('In delete');
  sqlQuery = "DELETE FROM Horse WHERE rowid = " + request.params.rowid;

  db.run(sqlQuery, function (result, error) {
    if (error) {
      return console.error(error.message);
    }

    db.close();

    response.end();
  });
})


app.listen(port, hostname);
console.log("Listening on port " + port);

