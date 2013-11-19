var express = require('express');
var Sequelize = require('sequelize');

var app = express();

var sequelize = new Sequelize('lawyer-scoreboard', 'root', null, {
  host: "localhost"
});

var Lawyer = sequelize.define('lawyer', {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    record: Sequelize.STRING,
    hourly_rate: Sequelize.FLOAT
})


app.use(express.bodyParser());
app.get('/lawyers', function(req, res) {
    Lawyer.all().success(function(lawyers) {
        res.send(lawyers);
    })
});

try {
    sequelize.sync();
}
catch (err) {
    console.log("database problem: "+err);   
}

app.listen(8000);