/*const mongodb = require('mongodb');
const dbClient = mongodb.MongoClient;



function dbAddCard(topic, num, quest, resp) {
dbClient.connect('mongodb://localhost:27017', (error, client) => { //client connects to server
    if (error) {                             //^call back functions
        console.error(error);
        client.close();
    }

    //var db = client.db('FLASHCARDS'); //data store created
    var deck = db.collection(topic);  //collections created 'person' ..topics var people = db.collection('topic');

    deck.insertOne({ //object of card created 
        "ID": num,
        "front": quest,
        "back": resp,
        "boo": true
    });
    console.log('card added?');
    client.close();
});
};

function dbAddTopic(string){
    dbClient.connect('mongodb://localhost:27017', (error, client) => { //client connects to server
    if (error) {                             //^call back functions
        console.error(error);
        client.close();
    }
    var db = client.db('FLASHCARDS'); //data store created
    var deck = db.collection(string);  //collections created 'person' ..topics var people = db.collection('topic');
    console.log('topic added?');
    client.close();
});
};


dbClient.connect('mongodb://localhost:27017', (error, client) => { //client connects to server
    if (error) {                             //^call back functions
        console.error(error);
        client.close();
    }

    var db = client.db('FLASHCARDS'); //data store created
    var deck = db.collection(topic);  //collections created 'person' ..topics var people = db.collection('topic');

    deck.insertOne({ //object of person created ..cards
        "ID": num,
        "front": quest,
        "back": resp,
        "boo": true

    }).then(() => {                                     //wait for a person to be in stock, then give me product 
        deck.find({}).toArray().then((data)=>{        //use find as a filter
            console.log(data);
        });
    });
    //client.close();
});
*/
