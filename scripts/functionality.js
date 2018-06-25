
// daft punk variables 
var theMachine = [0];                      //core array of program
var topicIndex = 0;
var testArray = ['Goat', 'Big Boats', 'aMSa', 'Mango'];

var btnPressS = false;                      //boo for trippig code
var btnPressC = false;
var mail;

var topic = {                               //topic object, name, array, index
    topicName: '',
    numberIndex: 0,
    cardArray: [0]
}
var card = {                                    //card object, has QnA, true is front
    front: 'question',
    back: 'answer',
    boo: true
}

var testCard = new Card('Im the front', 'im the back'); //is this it's own object or piggy backing?

function Topic(name) {                 //topic constructor
    this.topicName = name;
    this.numberIndex = 0;
    this.cardArray = new Array(0);
}
function Card(question, answer) {       //card constructor 
    this.front = question;
    this.back = answer;
    this.boo = true;
}

// Buttons Section
var newTopicButton = document.querySelector('button[type=newTopic]');
var newCardButton = document.querySelector('button[type=newCard]');
var flipCardButton = document.querySelector('button[type=flipCard]');
var editCardButton = document.querySelector('button[type=editCard]');
var selectTopicButton = document.querySelector('button[type=selectTopic]');
var saveButton = document.querySelector('button.save');
var cancelButton = document.querySelector('button.cancel');

// Event listener section
flipCardButton.addEventListener('click', flip);
newCardButton.addEventListener('click', addQuestion);
newTopicButton.addEventListener('click', addTopic);
editCardButton.addEventListener('click', edit);
selectTopicButton.addEventListener('click', select);

// Code that sets up event chain from main control buttons
function addQuestion() {                                             //adding a question, must update question and answer array, should require an object as input
    'use strict';
    deafen();
    btnPressS = false;
    btnPressC = false;
    var input;
    var resp;
    mail = setInterval(cardEnvelope, 250);
    doQnA('Enter Question');
};
function addTopic() {                                               //sets up a new topic
    'use strict';
    btnPressS = false;
    btnPressC = false;
    deafen();
    mail = setInterval(topicEnvelope, 250);                                //letter and envelope required as setInterval will not repeatedly run Fn with parameters
    doQnA('Define Topic');
};
function flip() {                                                   //flip the card, needs code to find location
    //code to get location of card
    flipIt(testCard);
}
function edit() {
    deafen();
    var temp = document.querySelector('textarea').value;
    mail = setInterval(editEnvelope, 250);
    doQnA(temp);
}
function select() {
    deafen();
    var text = displayArray(testArray);
    mail = setInterval(selectEnvelope, 250);
    doQnA(text);
}

// Everything mail related.. so functionality tied to save/cancel
function letter(boo, fn, boo2, fn2) {
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
function cardEnvelope() {
    letter(btnPressS, questSave1, btnPressC, questCancel);
}
function cardEnvelope2() {
    letter(btnPressS, questSave2, btnPressC, questCancel);
}
function topicEnvelope() {
    letter(btnPressS, doTpcSvd, btnPressC, doTpcCnl);
}
function editEnvelope() {
    letter(btnPressS, editIt, btnPressC, genericCancel);
}
function selectEnvelope(){
    letter(btnPressS, selectSave, btnPressC, genericCancel);
}

// code related to specific actions
function questSave2() {                                                      //creates the card
    resp = document.querySelector('textarea').value;
    console.log('create new card object here')
    document.querySelector('.topic').innerHTML = 'Same Topic';
    document.querySelector('.ID').innerHTML = 'ID: Current Question';
    document.querySelector('textarea').value = input;
    clearInterval(mail);
}
function questSave1() {                                                         //stores question
    input = document.querySelector('textarea').value;
    console.log('question saved as: ' + input);
    deafen();
    doQnA('Define the Answer');
    mail = setInterval(cardEnvelope2, 250);
}
function questCancel() {                                                    //canceles request, can probably make generic
    document.querySelector('.topic').innerHTML = 'Same Topic';
    document.querySelector('.ID').innerHTML = 'ID: Previous id';
    document.querySelector('textarea').value = 'Previous Q';
}
function doTpcSvd() {                                              //code NEEDED: for topic save specifically
    var text = document.querySelector('textarea').value;
    document.querySelector('.topic').innerHTML = 'Topic: ' + text;
    document.querySelector('.ID').innerHTML = 'ID: 0';
    //var a = new Topic(text, 0, 0);
    //theMachine.push(a);
    //readMe(theMachine);
    console.log('make a topic oject here')
    document.querySelector('textarea').value = 'Pleas make a new card';
}
function doTpcCnl() {                                              //code for topic cancel specifically, might not actually be needed
    document.querySelector('.topic').innerHTML = 'Previous Topic';
    document.querySelector('textarea').value = 'Previous Question';
}
function flipIt(card) {
    if (card.boo) {
        document.querySelector('textarea').value = card.back;
        card.boo = false;
    } else {
        document.querySelector('textarea').value = card.front;
        card.boo = true;
    }
}
function editIt() {                                                 //code NEEDED
    //code to get current card ID
    //put that response in for card
    edt(testCard); //probably just lump these 2gether once we can
}
var edt = (card) => {
    if (card.boo) {
        card.front = document.querySelector('textarea').value;
    } else {
        card.back = document.querySelector('textarea').value;
    }
}
function selectSave(){                                              //code NEEDED
    var text = document.querySelector('textarea').value;
    var indexy;
    if(compArray(testArray,text)){
        indexy = testArray.indexOf(text);
        console.log('Topic index found at: ' + indexy);
        //code to display Q1 of Topic
    } else {
        genericCancel();
    }
}

// code used as tools, these let me work code safer and faster
function savedMe() {                                             //runs code that any save input needs
    btnPressS = true;
    optionsAreDown();
    toggleVisibility();
    hyperacusis();
}
function canceledMe() {                                          //runs code that any cancel input needs
    btnPressC = true;
    optionsAreDown();
    toggleVisibility();
    hyperacusis();
}
function genericCancel() {
    document.querySelector('.topic').innerHTML = 'Preveous Selected Topic';
    document.querySelector('.ID').innerHTML = 'ID: Previous id';
    document.querySelector('textarea').value = 'Previous Card';
}
function doQnA(string) {                                            //sets up the Q n A 
    document.querySelector('textarea').value = string;
    toggleOn();
    saveButton.addEventListener('click', savedMe);
    cancelButton.addEventListener('click', canceledMe);
}
function hyperacusis() {                                             //code to turn listeners back on
    newTopicButton.addEventListener('click', addTopic);
    newCardButton.addEventListener('click', addQuestion);
    flipCardButton.addEventListener('click', flip);
    editCardButton.addEventListener('click', edit);
    selectTopicButton.addEventListener('click', select);
}
function deafen() {                                                     //code to turn listeners off
    newCardButton.removeEventListener('click', addQuestion);
    newTopicButton.removeEventListener('click', addTopic);
    flipCardButton.removeEventListener('click', flip);
    editCardButton.removeEventListener('click', edit);
    selectTopicButton.removeEventListener('click', select);
}
function optionsAreDown() {                                     //removes save/cancel listeners
    saveButton.removeEventListener('click', savedMe);
    cancelButton.removeEventListener('click', canceledMe);
}
function toggleVisibility() {                                   //code that makes buttons appear
    if (document.querySelector('.save').style.visibility === 'visible') {
        document.querySelector('.save').style.visibility = 'hidden';
        document.querySelector('.cancel').style.visibility = 'hidden';
    } else {
        document.querySelector('.save').style.visibility = 'visible';
        document.querySelector('.cancel').style.visibility = 'visible';
    }
};
function toggleOn() {                                               //force buttons on
    document.querySelector('.save').style.visibility = 'visible';
    document.querySelector('.cancel').style.visibility = 'visible';
};
function readMe(array) {
    array.forEach(element => {
        console.log(element.topicName);
        console.log('I am at ' + element.numberIndex);
        console.log('I have ' + element.cardArray.length + ' cards');
    });
}
function displayArray(array) {
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
function compArray(array, string) {
    for (n = 0; n < array.length; n++) {
        if (string === array[n]) {
            return true;
            console.log('we are the same');
        } 
    }
    return false;
}

var removeQuestion = () => {                        //removing a question, must remove a Q'n'A
    var superiorQ = numberIndex - 1;
};










/*var superiorQ = numberQ + 1;      handle array stuff
    for (n = 0; n <= superiorQ; n += 1) {
        if (questionArray[n] == true) {
        } else {
            questionArray[n] = question;
        }
    } */


//e.stopPropagation();
//add another event llistener for 'enter'
//  this.topicName = document.querySelector('textarea').value;     //this.topicName = document.querySelector('#textarea').value;
//return null; 

//  function AddTopic() {                               //trying to make constructor, happens after a click 
//needs to be potentially told to create a new object
//add an 'enter' 


//                                        = document.querySelector('#textarea').value; --will specificallt return value, instead of the entirety of the element  
//}

/* in class stuff, look at me later:
var formElement = document.querySelector('textarea'[]);
var formElement1 = document.forms[0];  --can select stuff off of expected elements, allready in the code
formElemt.addEventListener('submit', () => {
    var p = new Constructor();
    alert('thank you, ' + p.name);
})
var submitButtin = document.querySelector('button[type=submit]');
submitButton.addEventListener('click', (e)=> {
    var topic = new Constructor();      ^ <-can be called whatever
    e.stopPropagation(); --stops parents above from listening, acts slowly though, stops like a car at a yellow light -used to stop bubbling
    e.stopImmediatePropagation(); --stops parents from listening, acts immediately, red light --used to stop bubbling
    e.preventDefault(); --stops inherient code of elements that have events attatched to them
})
*/