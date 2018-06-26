
// Daft punk variables 
var theMachine = [0];
var topicIndex = 0;

// Variables for manipulation
var btnPressS = false;
var btnPressC = false;
var mail;

// Objects
var topic = {//...................................................Topic object, name, array, index
    topicName: '',
    numberIndex: 0,
    cardArray: [0]
}
var card = {//....................................................Card object, has front/back, true is front
    front: 'question',
    back: 'answer',
    boo: true
}

//tools for testing
var testArray = ['Goat', 'Big Boats', 'aMSa', 'Mango'];
var testNum = 0;
var testCard = new Card('Im the front', 'im the back');

// Buttons Section
var newTopicButton = document.querySelector('button[type=newTopic]');
var newCardButton = document.querySelector('button[type=newCard]');
var flipCardButton = document.querySelector('button[type=flipCard]');
var editCardButton = document.querySelector('button[type=editCard]');
var selectTopicButton = document.querySelector('button[type=selectTopic]');
var saveButton = document.querySelector('button.save');
var cancelButton = document.querySelector('button.cancel');
var nextCardButton = document.querySelector('button[type=selectCard]');
var deleteTopicButton = document.querySelector('button[type=deleteTopic]');
var deleteCardButton = document.querySelector('button[type=deleteCard]');

// Event listener section
flipCardButton.addEventListener('click', flip);
newCardButton.addEventListener('click', addQuestion);
newTopicButton.addEventListener('click', addTopic);
editCardButton.addEventListener('click', edit);
selectTopicButton.addEventListener('click', select);
nextCardButton.addEventListener('click', next);
deleteTopicButton.addEventListener('click', deleteTopic);
deleteCardButton.addEventListener('click', deleteCard);

// Constructors
function Topic(name) {//...........................................Topic constructor
    this.topicName = name;
    this.numberIndex = 0;
    this.cardArray = new Array(0);
}
function Card(question, answer) {//................................Card constructor 
    this.front = question;
    this.back = answer;
    this.boo = true;
}

// Code that sets up event chain from main control buttons
function addQuestion() {//.........................................Adding a question, must update question and answer array, should require an object as input
    'use strict';
    deafen();
    var input;
    var resp;
    mail = setInterval(cardEnvelope, 250);
    doQnA('Enter Question');
};
function addTopic() {//............................................Sets up a new topic
    'use strict';
    deafen();
    mail = setInterval(topicEnvelope, 250);                                //letter and envelope required as setInterval will not repeatedly run Fn with parameters
    doQnA('Define Topic');
};
function flip() {//................................................flip the card, needs code to find location
    //code to get location of card
    flipIt(testCard);//.............................This needs to call the server
}
function edit() {//................................................Lets us change an existing card content
    deafen();
    var temp = document.querySelector('textarea').value;
    mail = setInterval(editEnvelope, 250);
    doQnA(temp);
}
function select() {//..............................................Lets you select the topic
    deafen();
    var text = displayArray(testArray);
    mail = setInterval(selectEnvelope, 250);
    doQnA(text);
}
function next() {//................................................Code NEEDED: Advance to the next card
    var number = document.querySelector('#ID').innerHTML;
    number = nextOne(testArray, number);
}
function deleteTopic() {//.........................................Removes a Topic: specs NEEDED
    deafen();
    var text = displayArray(testArray);
    mail = setInterval(deleteEnvelope, 250);
    doQnA(text);
}
function deleteCard() {//..........................................Removes a Card: specs NEEDED
    var number = document.querySelector('#ID').innerHTML;
    testArray.splice(number, 1);
    genericCancel();
}

// Everything mail related.. so functionality tied to save/cancel
function letter(boo, fn, boo2, fn2) {//............................Chains response with eventListener
    if (!boo) {
        console.log('waiting');
    } else {
        console.log('FUNCTION SAVE');
        btnPressC = false;
        btnPressS = false;
        clearInterval(mail);
        fn();
    }
    if (!boo2) {
    } else {
        console.log('FUNCTION CANCEL');
        btnPressC = false;
        btnPressS = false;
        clearInterval(mail);
        fn2();
    }
}
function cardEnvelope() {//........................................Content Holder
    letter(btnPressS, questSave1, btnPressC, genericCancel);
}
function cardEnvelope2() {//.......................................Content Holder
    letter(btnPressS, questSave2, btnPressC, genericCancel);
}
function topicEnvelope() {//.......................................Content Holder
    letter(btnPressS, doTpcSvd, btnPressC, doTpcCnl);
}
function editEnvelope() {//........................................Content Holder
    letter(btnPressS, editIt, btnPressC, genericCancel);
}
function selectEnvelope() {//......................................Content Holder
    letter(btnPressS, selectSave, btnPressC, genericCancel);
}
function deleteEnvelope() {//......................................Content Holder
    letter(btnPressS, confirmDelete, btnPressC, genericCancel);
}

// Code related to specific actions
function questSave2() {//..........................................Code NEEDED: Creates the card
    resp = document.querySelector('textarea').value;
    //code to match topic

    var tpc = document.querySelector('#topic').innerHTML;
    var num = document.querySelector('#ID').innerHTML;

    //dbAddCard(tpc, input, resp, num);
    console.log('create new card object here and add to array') //use resp and input for front and back
    //need to display current card
    genericCancel();
    clearInterval(mail);
}
function questSave1() {//..........................................Stores question
    input = document.querySelector('textarea').value;
    console.log('question saved as: ' + input);
    deafen();
    doQnA('Define the Answer');
    mail = setInterval(cardEnvelope2, 250);
}
function doTpcSvd() {//............................................Code NEEDED: for topic save specifically
    var text = document.querySelector('textarea').value;
    if (compArray(testArray, text)) {
        document.querySelector('#topic').innerHTML = 'Preveous Selected Topic';
        document.querySelector('#ID').innerHTML = 'Previous id';
        document.querySelector('textarea').value = 'Sorry, Topic already exist, cannot make new Topic';
    } else {
        document.querySelector('#topic').innerHTML = text;
        document.querySelector('#ID').innerHTML = '0';
        testArray.push(text);//........................................Look at me now
        console.log('make a topic oject here');
        //dbAddTopic(text);
        document.querySelector('textarea').value = 'Pleas make a new card';
    }
}
function doTpcCnl() {//............................................Code for topic cancel specifically, might not actually be needed
    document.querySelector('#topic').innerHTML = 'Previous Topic';
    document.querySelector('textarea').value = 'Previous Question';
}
function flipIt(card) {//..........................................Code NEEDEDFlips the card
    //code to get current card ID
    if (card.boo) {
        document.querySelector('textarea').value = card.back;
        card.boo = false;
    } else {
        document.querySelector('textarea').value = card.front;
        card.boo = true;
    }
}
function editIt() {//..............................................Code NEEDED
    //code to get current card ID
    //put that response in for card
    edt(testCard); //probably just lump these 2gether once we can
}
var edt = (card) => {//............................................lets me match formatting
    if (card.boo) {
        card.front = document.querySelector('textarea').value;
    } else {
        card.back = document.querySelector('textarea').value;
    }
}
function selectSave() {//..........................................Code NEEDED
    var text = document.querySelector('textarea').value;
    var indexy;
    if (compArray(testArray, text)) {
        indexy = testArray.indexOf(text);
        console.log('Topic index found at: ' + indexy);
        //code to display Q1 of Topic
    } else {
        genericCancel();
    }
}
function confirmDelete() {//.......................................Code NEEDED: Remove and truncate array
    var text = document.querySelector('textarea').value;
    var indexy;
    var text = document.querySelector('textarea').value;
    if (compArray(testArray, text)) {
        indexy = testArray.indexOf(text);
        console.log('Delete topicfound at index: ' + indexy);
        testArray.splice(indexy, 1);
    } else {
        genericCancel();
    }
}
var nextOne = (array, number) => {//...............................Code NEEDED
    if (number >= (array.length - 1)) {
        number = 0;
    } else {
        number++;
    };
    document.querySelector('textarea').value = array[number];
    console.log(number);
    document.querySelector('#ID').innerHTML = number;
    return number;
}

// Code used as tools, these let me work code safer and faster
function savedMe() {//.............................................Runs code that any save input needs
    btnPressS = true;
    optionsAreDown();
    toggleVisibility();
    hyperacusis();
}
function canceledMe() {//..........................................Runs code that any cancel input needs
    btnPressC = true;
    optionsAreDown();
    toggleVisibility();
    hyperacusis();
}
function genericCancel() {//.......................................Generic cancel code
    document.querySelector('#topic').innerHTML = 'Preveous Selected Topic';
    var num = document.querySelector('#ID').innerHTML
    document.querySelector('#ID').innerHTML = num;
    document.querySelector('textarea').value = 'Previous Card';
}
function doQnA(string) {//.........................................Sets up the Q n A 
    document.querySelector('textarea').value = string;
    toggleOn();
    saveButton.addEventListener('click', savedMe);
    cancelButton.addEventListener('click', canceledMe);
}
function hyperacusis() {//.........................................Code to turn listeners back on
    newTopicButton.addEventListener('click', addTopic);
    newCardButton.addEventListener('click', addQuestion);
    flipCardButton.addEventListener('click', flip);
    editCardButton.addEventListener('click', edit);
    selectTopicButton.addEventListener('click', select);
    nextCardButton.addEventListener('click', next);
    deleteTopicButton.addEventListener('click', deleteTopic);
    deleteCardButton.addEventListener('click', deleteCard);
}
function deafen() {//..............................................Code to turn listeners off
    newCardButton.removeEventListener('click', addQuestion);
    newTopicButton.removeEventListener('click', addTopic);
    flipCardButton.removeEventListener('click', flip);
    editCardButton.removeEventListener('click', edit);
    selectTopicButton.removeEventListener('click', select);
    nextCardButton.removeEventListener('click', next);
    deleteTopicButton.removeEventListener('click', deleteTopic);
    deleteCardButton.removeEventListener('click', deleteCard);
}
function optionsAreDown() {//......................................Removes save/cancel listeners
    saveButton.removeEventListener('click', savedMe);
    cancelButton.removeEventListener('click', canceledMe);
}
function toggleVisibility() {//....................................Code that makes buttons appear
    if (document.querySelector('.save').style.visibility === 'visible') {
        document.querySelector('.save').style.visibility = 'hidden';
        document.querySelector('.cancel').style.visibility = 'hidden';
    } else {
        document.querySelector('.save').style.visibility = 'visible';
        document.querySelector('.cancel').style.visibility = 'visible';
    }
};
function toggleOn() {//............................................Force buttons on
    document.querySelector('.save').style.visibility = 'visible';
    document.querySelector('.cancel').style.visibility = 'visible';
};
function readMe(array) {//.........................................Display stuff about topic
    array.forEach(element => {
        console.log(element.topicName);
        console.log('I am at ' + element.numberIndex);
        console.log('I have ' + element.cardArray.length + ' cards');
    });
}
function displayArray(array) {//...................................Display array
    var text = 'Select one of the following: ';
    for (n = 0; n < array.length; n++) {
        if (n === array.length - 1) {
            text = text + array[n];
        } else {
            text = text + array[n] + ', ';
        }
    }
    return text;
}
function compArray(array, string) {//..............................Compare an array element with string, returns true if =
    for (n = 0; n < array.length; n++) {
        if (string === array[n]) {
            return true;
            console.log('we are the same');
        }
    }
    return false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    mongoDB                                                                          //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//var db = client.db('FLASHCARDS'); //data store created
/*
const mongodb = require('mongodb');
const dbClient = mongodb.MongoClient;
function dbAddCard(topic, num, quest, resp) {
    dbClient.connect('mongodb://localhost:27017', (error, client) => { //client connects to server
        if (error) {                             //^call back functions
            console.error(error);
            client.close();
        }
        var db = client.db('FLASHCARDS'); //data store created
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

function dbAddTopic(string) {
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

/*
dbClient.connect('mongodb://localhost:27017', (error, client) => { //client connects to server
    if (error) {                             //^call back functions
        console.error(error);
        client.close();
    }

    // var db = client.db('FLASHCARDS'); //data store created
    var deck = db.collection(topic);  //collections created 'person' ..topics var people = db.collection('topic');

    deck.insertOne({ //object of person created ..cards
        "ID": num,
        "front": quest,
        "back": resp,
        "boo": true

    }).then(() => {                                     //wait for a person to be in stock, then give me product 
        deck.find({}).toArray().then((data) => {        //use find as a filter
            console.log(data);
        });
    });
    //client.close();
});*/
