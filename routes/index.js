var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) { //if user use basic URL
    fs.readFile('views/main.html', function(error,data) { //main.html
        if(error){
            console.log(error);
        } else {
            res.writeHead(200, {'Content-Type': 'text/html' }); //Head Type setup
            res.end(data);  //load html response
        }
    });
});

module.exports = router;
