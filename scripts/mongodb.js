const mongodb = require('mongodb');
const dbClient = mongodb.MongoClient;

dbClient.connect('mongodb://localhost:27017', (error, client) => { //client connects to server
    if (error) {                             //^call back functions
        console.error(error);
        client.close();
    }

    var db = client.db('hellodb'); //data store created
    var people = db.collection('person');//collections created 'person' ..topics

    people.insertOne({ //object of person created ..cards
        "firstName": "kurt",
        "lastName": "pedersen"
    }).then(() => {                                     //wait for a person to be in stock, then give me product 
        people.find({}).toArray().then((data)=>{        //use find as a filter
            console.log(data);
        });
    });
    //client.close();
});