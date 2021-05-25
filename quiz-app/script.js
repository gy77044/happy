
const quizData = [
    {
        question: 'How old is Raman?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct : 'c',
    },{
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct : 'd',
    },{
        question: 'Who is the prime minister of INDIA?',
        a: 'Donald Trump',
        b: 'Narendra Modi',
        c: 'Rahul Gandhi',
        d: 'Amit Shah',
        correct : 'b',

    },{
        question: 'What does Html Stands for?',
        a: 'HyperText Markup Language',
        b: 'Extensible Markup language',
        c: 'Hypo Text Meta long',
        d: 'HyperText Mateup language',
        correct : 'a',

    },
        {
            question: 'What year was JavaScript launched?',
            a: '1995',
            b: '1994',
            c: '1996',
            d: 'non of these',
            correct : 'a',
    
        }
    
];


const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");


const questionE1= document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz()
{
    deselectAnswers();
    const currentQuizData = quizData
    [currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    
    let answer = undefined;
    answersEls.forEach((answerEl) => {
      if(answerEl.checked)
      {
            answer= answerEl.id;
      }            
        });
        return answer;
}


function deselectAnswers(){
    answersEls.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submitBtn.addEventListener('click',() =>{
    //check to see the answer
   
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        } 
        currentQuiz++;   
     if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
            quiz.innerHTML = "<h2> You answered correctly at "+ score+"/"+quizData.length +' questions.</h2><button onclick="location.reload()">Reload</button>';
        
        }
}
});