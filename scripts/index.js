
/*

sharing a button with event listeners has become a problem, I need to learn how to remove them, unfortunately the lock idea although its cool does not handle the problem as when a listener is created they are either layered or the code associated with it is ran before the click, as when I change the boolean value locking it when i click it, it runs a past respose for the click  

*/

var theMachine = [0];                      //core array of program
var topicIndex = 0;

var btnPressS = false;                      //boo for trippig code
var btnPressC = false;

var topicMail;                              //exterior identities for calling

var topic = {                               //topic object, name, array, index
    topicName: '',
    numberIndex: 0,
    cardArray: []
}
var card = {                                    //card object, has QnA
    front: 'question',
    back: 'answer'
}

function Topic(name) {                 //topic constructor
    this.topicName = name;
    this.numberIndex = 0;
    this.cardArray = new Array(0);
}

function Card(question, answer) {       //card constructor 
    this.front = question;
    this.back = answer;
}

var moreMachine = (array) => {                        //takes an array, copies it, and adds an empty element at the end... preexisting function of this exist but soles the hardcode problem
    var copyMachine = new Array(array.length);
    for (n = 0; n <= array.length; n++) {
        copyMachine[n] = array[n];
    }
    theMachine = copyMachine;                          //I want my c++ pointer, I don't know how to save theMachine's value outside the function with calling array the parameter  
}

var newTopicKey = false;                                //I hate having to make this a lock game but js is dumb and won't let you cancel event listeners unless they are predefined functions, either rewrite the code to call pne neat function or learn how to remove the listeners
var selectTopicKey = false;
var deleteTopicKey = false;
var newCardKey = false;
var newCardKeySecondDegree = false;
var editCardKey = false;
var flipCardKey = false;
var nextCardKey = false;
var deleteCardKey = false;
var keyChain = [newTopicKey, selectTopicKey, deleteTopicKey, newCardKey, newCardKeySecondDegree, editCardKey, flipCardKey, nextCardKey, deleteCardKey];

var newTopicButton = document.querySelector('button[type=newTopic]');
var newCardButton = document.querySelector('button[type=newCard]');
var flipCardButton = document.querySelector('button[type=flipCard]');
var saveButton = document.querySelector('button.save');
var cancelButton = document.querySelector('button.cancel');

flipCardButton.addEventListener('click', (e1) => {
    flipIt()
});

newCardButton.addEventListener('click', addQuestion);
newTopicButton.addEventListener('click', addTopic);


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


function letter(boo, fn, boo2, fn2) {                                          //code to see if a button has been pressed
if (!boo) {
    console.log(boo);
} else {
    console.log('FUNCTION SAVE');
    btnPressC = false;
    btnPressS = false;
    deliveredMail();
    fn();
}
if (!boo2) {
    console.log(boo2);
} else {
    console.log('FUNCTION CANCEL');
    btnPressC = false;
    btnPressS = false;
    deliveredMail();
    fn2();
}
}

function topicEnvelope(){                                           //will let me trigger code from an event listener without the code being directly tied to it, this simplifiys the amount of work needed to remove eventlisteners as all event listeners are now generic as specificity is chain reacted not directly tied to it
    letter(btnPressS, doTpcSvd, btnPressC, doTpcCnl);
}
function doQnA(string) {                                            //sets up the Q n A 
    document.querySelector('textarea').value = string;
    toggleOn();
    saveButton.addEventListener('click', savedMe);
    cancelButton.addEventListener('click', canceledMe);
}
function addTopic() {                                               //sets up a new topic
    'use strict';
    btnPressS = false;
    btnPressC = false;
    deafen();
    topicMail = setInterval(topicEnvelope, 500);                                //letter and envelope required as setInterval will not repeatedly run Fn with parameters
    doQnA('Define Topic');
};

function doTpcSvd() {                                              //code for topic save specifically
    var text = document.querySelector('textarea').value;
    document.querySelector('.topic').innerHTML = 'Topic: ' + text;
    document.querySelector('.ID').innerHTML = 'ID: 0';
    console.log('make a topic oject here')
    document.querySelector('textarea').value = 'Pleas make a new card';
}

function doTpcCnl() {                                              //code for topic cancel specifically, might not actually be needed
    document.querySelector('.topic').innerHTML = 'Previous Topic';
    document.querySelector('textarea').value = 'Previous Question';
}













function addQuestion() {                            //adding a question, must update question and answer array, should require an object as input

    deafen();
    newCardKey = true;
    toggleKey(keyChain, newCardKey);

    if (newCardKey === true) {
        document.querySelector('textarea').value = 'Enter Question?';
        var saveButton = document.querySelector('button.save');
        var cancelButton = document.querySelector('button.cancel');
        toggleOn();

        saveButton.addEventListener('click', (e1) => {                      //1st degree save
            if (newCardKey === true) {
                var question = '';
                question = document.querySelector('textarea').value;
                console.log(question);
                document.querySelector('textarea').value = 'Enter Answer?';
                var answerSave = document.querySelector('button.save');
                var answerCancel = document.querySelector('button.cancel');
                newCardKey = false;
                newCardKeySecondDegree = true;
                toggleKey(keyChain, newCardKeySecondDegree);

                e1.stopImmediatePropagation();

                answerSave.addEventListener('click', (e2) => {                  //2nd degree save
                    if (newCardKeySecondDegree === true) {
                        var answer = '';
                        answer = document.querySelector('textarea').value;
                        console.log(answer);
                        document.querySelector('.ID').innerHTML = 'ID: ' + 'add code for array';        //add array stuff
                        document.querySelector('textarea').value = 'Current Card Question';
                        toggleVisibility();
                        newCardKeySecondDegree = false;
                        hyperacusis();
                        e2.stopImmediatePropagation();
                    }
                });
                answerCancel.addEventListener('click', (e2) => {                        //2nd degree cancel
                    if (newCardKeySecondDegree === true) {
                        document.querySelector('.ID').innerHTML = 'ID: ' + 'previoust ID';
                        document.querySelector('textarea').value = 'Previous Card';
                        toggleVisibility();
                        newCardKeySecondDegree = false;
                        hyperacusis();
                        e2.stopImmediatePropagation();
                    }
                });
            }
        });
        cancelButton.addEventListener('click', (e1) => {                        //1st degree cancel
            if (newCardKey === true) {
                toggleVisibility();
                //write code to return to old card here
                document.querySelector('.ID').innerHTML = 'ID: ' + 'Preveous ID'; //write code to old topic here
                document.querySelector('textarea').value = 'Previous Card';
                newCardKey = false;
                hyperacusis();
                e1.stopImmediatePropagation();
            }
        });
    }
};
function hyperacusis() {                                             //code to turn listeners back on
    newTopicButton.addEventListener('click', addTopic);
    newCardButton.addEventListener('click', addQuestion);
}
function deafen() {                                                     //code to turn listeners off
    newCardButton.removeEventListener('click', addQuestion);
    newTopicButton.removeEventListener('click', addTopic);
}
var flipIt = (card) => {
    document.querySelector('textarea').value = 'front of card';
}

var removeQuestion = () => {                        //removing a question, must remove a Q'n'A
    var superiorQ = numberQ - 1;
};

function toggleVisibility() {
    if (document.querySelector('.save').style.visibility === 'visible') {
        document.querySelector('.save').style.visibility = 'hidden';
        document.querySelector('.cancel').style.visibility = 'hidden';
    } else {
        document.querySelector('.save').style.visibility = 'visible';
        document.querySelector('.cancel').style.visibility = 'visible';
    }
};

function toggleOn() {
    document.querySelector('.save').style.visibility = 'visible';
    document.querySelector('.cancel').style.visibility = 'visible';
};

function optionsAreDown() {
    saveButton.removeEventListener('click', savedMe);
    cancelButton.removeEventListener('click', canceledMe);
}

function deliveredMail() {
    clearInterval(topicMail);
}

function toggleKey(array, key) {                   //function to cause eventListeners to be mute.. doesn't work as inetended both by logic and by how event listeners run
    array.forEach(value => {
        if (value === key) {
            key = true;
        } else {
            element = false;
        }
    });
}

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




