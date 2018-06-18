var topic = {
    topicName: 'error, need name',
    numberQ: 0,
    questionArray: [5],    //numberQ
    questionAnswer: [5],   //numberQ
}



var newTopicButton = document.querySelector('button[type=newTopic]');
newTopicButton.addEventListener('click', (e) => {
    document.querySelector('textarea').innerHTML = 'Define Topic?';         //everything good







    var contentHolder = document.querySelector('textarea');
    contentHolder.addEventListener('keyup', (e1) => {

        if (characterCode == 13 && e1.shiftkey == false) {
            e1.preventDefault();
            document.querySelector('#topic').innerHTML = contentHolder.value;
            //where we also need to add object constructor
            console.log(contentHolder).value;
            return null;
        }

    });

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

var addQuestion = () => {                            //adding a question, must update question and answer array
    console.log('New Question?');
    var question = 'input from user';               //need to add more code
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







