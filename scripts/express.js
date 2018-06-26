const mongodb = require('mongodb');
const dbClient = mongodb.MongoClient;


dbClient.connect('mongodb://localhost:27017', (error, client) => { //client connects to server
    if (error) {                             //^call back functions
        console.error(error);
        client.close();
    }

    /////////////////////////////////////////////////////////////////////////////////
    //                                Express Server                               //
    /////////////////////////////////////////////////////////////////////////////////
    var express = require('express');
    var path = require('path');
    const app = express();

    app.use(express.static('styles'));
    app.use(express.static('scripts'));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'));
    });

    

    app.listen(9001);
    /////////////////////////////////////////////////////////////////////////////////
});