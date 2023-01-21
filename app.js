// var questions = [
//     {
//         // id: 1,
//         Question: 'MS word is software of ____',
//         CorrectAns: 'Microsoft',
//         Options: [
//             "Apple",

//             "Android",

//             "Google",

//             "Microsoft"
//         ],

//     },
//     {
//         // id: 2,
//         Question: 'Which is the word processing software?',
//         CorrectAns: 'MS word 2007',
//         Options: [
//             "Avast",

//             "MS word 2007",

//             "Google Chrome ",

//             "Mozilla Firefox"
//         ],


//     },
//     {
//         // id: 3,
//         Question: 'MS Word is ____ software.    ',
//         CorrectAns: 'Word processing',
//         Options: [
//             "Web browser",

//             "Word processing",

//             "Operating system",

//             "Antivirus"
//         ],



//     },
//     {
//         // id: 4,
//         Question: 'The valid format of MS Word is __',
//         CorrectAns: '.doc',
//         Options: [
//             ".exe",
//             ".doc",
//             ".png",
//             " .jpeg",
//         ],


//     },
//     {
//         // id: 5,
//         Question: 'What program is used in MS-Word to check the spelling?',
//         CorrectAns: 'Spelling & Grammar',
//         Options: [
//             "Research",
//             "Word Count",
//             "Set language",
//             "Spelling & Grammar",
//         ],
//     },
//     {
//         // id: 6,
//         Question: 'A word gets selected by clicking it',
//         CorrectAns: ' Twice',
//         Options: [
//             " Once",
//             " Twice",
//             "Three times",
//             "Four times"
//         ],


//     },
//     {
//         // id: 7,
//         Question: 'The center the selected text, the shortcut key is',
//         CorrectAns: 'Ctrl + E',
//         Options: [
//             "Ctrl + C",
//             "Ctrl + E",
//             " Ctrl + U",
//             "Ctrl + O"
//         ],


//     },
//     {
//         // id: 8,
//         Question: 'Which option is not available in Microsoft office button?',
//         CorrectAns: 'Bold',
//         Options: [
//             "Bold",
//             "New",
//             "Save",
//             "Open"
//         ],


//     },
//     {
//         // id: 9,
//         Question: '_____ is the change the way text warps around the selected object.',
//         CorrectAns: ' Text wrapping',
//         Options: [
//             "Text wrapping",
//             "Indent",
//             "Clipart",
//             " Line spacing"
//         ],


//     },
//     {
//         // id: 10,
//         Question: 'A major step before taking print of the document is',
//         CorrectAns: 'Both b and c',
//         Options: [
//             "To save the document",
//             "To set paper setting",
//             "To see print preview of the document",
//             "Both b and c"
//         ],

//     }

// ];
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    push,
    set,
    onChildAdded
}
    from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlBY5M7rSYFEzXo9-pNQ38qfg96U6bm-0",
    authDomain: "quiz-app-d0433.firebaseapp.com",
    projectId: "quiz-app-d0433",
    storageBucket: "quiz-app-d0433.appspot.com",
    messagingSenderId: "363474942081",
    appId: "1:363474942081:web:2cfbebe8bf386ad3913580",
    measurementId: "G-YW0D4F4427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// for (let i = 0; i <= questions.length; i++) {
//     }


var box = document.getElementById('box')
var question = document.getElementById('question')
var ansParent = document.getElementById('ansParent')
var showMarks = document.getElementById('showMarks')
var percentage = document.getElementById('percentage')
var buttons = document.getElementById('buttons')
var body = document.getElementById('body')
var result = document.getElementById('result')
var rslt = document.getElementById('rslt')
var addMore = document.getElementById('addMore')

var userQue = document.getElementById('userQue')

var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')

var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var marks = 0;
var indexNum = 0;
var questions = []

window.backToQuiz = function () {
    window.location.assign("index.html")
}
window.addMoreQue = function () {
    window.location.assign("question.html")
}


var loader = document.getElementById('loader')
function getDataFromDatabase() {
    // loader.style.display = 'block'
    // result.style.display = 'none'
    // addMore.style.display = 'none'
    // body.style.display = 'none'

    const refrence = ref(db, "questions/")
    onChildAdded(refrence, function (data) {
        // console.log(data.val());
        questions.push(data.val());
        // console.log(questions);
        // console.log(questions);
        // loader.style.display = 'none';
        // body.style.display = 'block';
        // result.style.display = 'block'
        // addMore.style.display = 'block'
        renderQuestion()
    })
}
getDataFromDatabase()
window.add = function () {
    var obj = {
        Question: userQue.value,
        CorrectAns: "Saad",
        Options: [
            `${opt1.value}`,
            `${opt2.value}`,
            `${opt3.value}`,
            `${opt4.value}`
        ]
    }
    if (option1.checked) {
        obj.CorrectAns = opt1.value;
        questions.push(obj)
        // console.log(questions)
    } else if (option2.checked) {
        obj.CorrectAns = opt2.value;
        questions.push(obj)
        // console.log(questions)
    } else if (option3.checked) {
        obj.CorrectAns = opt3.value;
        questions.push(obj)
        // console.log(questions)
    } else if (option4.checked) {
        obj.CorrectAns = opt4.value;
        questions.push(obj)
        // console.log(questions)
    } else {
        console.log("Error");
    }
    userQue.value = "";
    opt1.value = "";
    opt2.value = "";
    opt3.value = "";
    opt4.value = "";
    obj.id = push(ref(db, "questions/")).key
    const refrence = ref(db, `questions/${obj.id}`)
    set(refrence, obj)
        .then(function () {
            console.log("success");
        })
        .catch(function (err) {
            console.log(err);
        })

    console.log(obj);
    console.log(obj);
}

function renderQuestion() {
    var currentQue = questions[indexNum]
    question.innerHTML = `Q${indexNum + 1}. ${currentQue.Question}`;
    // console.log(currentQue.Question);
    // console.log(indexNum);
    // question.innerHTML = "Saad Sohail";
    ansParent.innerHTML = "";
    for (let i = 0; i < currentQue.Options.length; i++) {
        ansParent.innerHTML += `<span class="fs-3"><input type='radio' name="options" value="${i + 1}stAns" onclick="checkQues('${currentQue.Options[i]}','${currentQue.CorrectAns}')" class="btn btn-primary rounded m-2 px-5"><label id="${1}stAns" for="${1}stAns">${currentQue.Options[i]}</label><span/><br/>`
        // ansParent.innerHTML = "Saad Sohail"
    }
    // console.log(ansParent.innerHTML);
    // indexNum++
}
// renderQuestion()
// ansParent.innerHTML = "Saad SOHAIL"
// console.log(question)


window.nextQuestion = function () {
    indexNum++
    renderQuestion()
}
window.checkQues = function (a, b) {
    if (a == b) {
        marks++
        showMarks.innerHTML = `${marks} / ${questions.length}`;
        percentage.innerHTML = (marks / questions.length) * 100;
    }
    if (indexNum + 1 == questions.length) {
        if (indexNum + 1 == questions.length) {
            body.style.display = "none";
            addMore.style.display = "none";
            result.setAttribute("class", "result")
            rslt.style.display = "block";
        }
    } else {
        nextQuestion();
    }
}
// function firstAnswer() {
//     renderQuestion()
// }
// console.log(firstAns)
// firstAns.innerHTML = questions[a].Options[i];
// secondAns.innerHTML = questions[indexNum].Options[1];
// thirdAns.innerHTML = questions[indexNum].Options[2];
// fourthAns.innerHTML = questions[indexNum].Options[3];
// renderQuestion()
// console.log(userQue.value);
// var obj = {
//     Question: userQue.value,
//     CorrectAns: "Saad",
//     Options: [
//         `${opt1.value}`,
//         `${opt2.value}`,
//         `${opt3.value}`,
//         `${opt4.value}`
//     ]
// }
// if (option1.checked) {
//     obj.CorrectAns = opt1.value;
//     questions.push(obj)
//     // console.log(questions)
// } else if (option2.checked) {
//     obj.CorrectAns = opt2.value;
//     questions.push(obj)
//     // console.log(questions)
// } else if (option3.checked) {
//     obj.CorrectAns = opt3.value;
//     questions.push(obj)
//     // console.log(questions)
// } else if (option4.checked) {
//     obj.CorrectAns = opt4.value;
//     questions.push(obj)
//     // console.log(questions)
// } else {
//     console.log("Error");
// }
// userQue.value = "";
// opt1.value = "";
// opt2.value = "";
// opt3.value = "";
// opt4.value = "";
// window.location.assign("index.html")
// console.log(questions);
// window.localStorage.setItem("a", `${questions}`)
// console.log(a);
// console.log(obj)
// const questionListRef = ref(db, 'questions');
// const newPostRef = push(questionListRef);
// set(newPostRef, obj);
// window.location.assign("index.html")
// var a = window.localStorage.getItem("a")
// console.log(a);


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// var correctAns = ["Kolachi", "Information Technology", "Parvez Musharraf", 7, "Quaid-e-Azam", "Yellow", "Mango", 6, "Cascading Style Sheet", " Hyper Text Markup Language"]
