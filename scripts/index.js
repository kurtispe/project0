var topic = {
    topicName: 'error, need name',
    numberQ: 0,
    questionArray: [0],    //numberQ
    questionAnswer: [0],   //numberQ
}

var card = {
    front: 'question',
    back: 'answer',
}

var newTopicButton = document.querySelector('button[type=newTopic]');

newTopicButton.addEventListener('click', (e) => {                       //creats new topic folder
    document.querySelector('textarea').value = 'Define Topic?';         //everything good
    toggleVisibility();                                                     //show save/cancel buttons

    var saveButton = document.querySelector('button.save');                 //create the buttons themselves
    var cancelButton = document.querySelector('button.cancel');

    saveButton.addEventListener('click', (e1) => {

        var contentHolder = document.querySelector('textarea');       //get the value inside the text area

        document.querySelector('.topic').innerHTML = 'Topic: ' + contentHolder.value; //adjust display for Topic

        //where we also need to add object constructor 

        console.log(contentHolder.value);
        toggleVisibility();
        e1.stopImmediatePropagation();
    });

    cancelButton.addEventListener('click', (e1) => {
        toggleVisibility();
        document.querySelector('textarea').value = 'Previous Card'; //write code to return to old card here
        document.querySelector('.topic').innerHTML = 'Topic: ' + 'Previous Topic'; //write code to old topic here
        e1.stopImmediatePropagation();
    });
    e.preventDefault;
});



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

var addQuestion = (topic) => {                            //adding a question, must update question and answer array

    document.querySelector('textarea').value = 'Enter Question?';
    var saveButton = document.querySelector('button.save'); 
    var cancelButton = document.querySelector('button.cancel');
    toggleVisibility();
    var question = '';

    saveButton.addEventListener('click', (e1) => {

        question = document.querySelector('textarea').value;
        console.log(question);
        document.querySelector('textarea').value = 'Enter Answer?';
        var answer = '';
        var answerSave = document.querySelector('button.save');
        var answerCancel= document.querySelector('button.cancel');

        answerSave.addEventListener('click', (e1) => {
            answer = document.querySelector('textarea').value;
            console.log(answer);
            toggleVisibility();
            document.querySelector('.ID').innerHTML = 'ID: ' + 'add code for array';        //add array stuff
            e1.stopImmediatePropagation();

        });

        answerCancel.addEventListener('click', (e1) => {
         toggleVisibility();
         e1.stopImmediatePropagation();
        });

    });

    cancelButton.addEventListener('click', (e1) => {
        toggleVisibility();
        document.querySelector('textarea').value = 'Previous Card'; //write code to return to old card here
        document.querySelector('.topic').innerHTML = 'Topic: ' + 'Previous Topic'; //write code to old topic here
        e1.stopImmediatePropagation();
    });
    
    var superiorQ = numberQ + 1;

    for (n = 0; n <= superiorQ; n += 1) {
        if (questionArray[n] == true) {
        } else {
            questionArray[n] = question;
        }
    }
};

var removeQuestion = () => {                        //removing a question, must remove a Q'n'A
    var superiorQ = numberQ - 1;
};

var toggleVisibility = () => {
    if (document.querySelector('.save').style.visibility === 'visible') {
        document.querySelector('.save').style.visibility = 'hidden';
        document.querySelector('.cancel').style.visibility = 'hidden';
    } else {
        document.querySelector('.save').style.visibility = 'visible';
        document.querySelector('.cancel').style.visibility = 'visible';
    }
};







