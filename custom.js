const question = document.getElementById('question');
const quizGame = document.getElementById('quiz-game');
var probableAnswers = document.getElementById('probable-answers');
const quizContainer = document.getElementById('quiz-container');
const scoreElement = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const cancelBtn = document.getElementById('cancel-btn');
nextBtn.classList.add('hide');
quizGame.classList.add('hide');
var index = 0;
var score = 0;
var data = [
    {
        question: '1 + 1 ?',
        answer: [
            {text: '2', isCorrect: true},
            {text: '3', isCorrect: false},
            {text: '4', isCorrect: false}
        ]
    },
    {
        question: '10 * 4?',
        answer: [
            {text: '20', isCorrect: false},
            {text: '30', isCorrect: false},
            {text: '40', isCorrect: true},
            {text: '50', isCorrect: false}
        ]
    }
]
function quizOptionLoad() {
    question.innerHTML = data[index].question
    console.log(data);
    data[index].answer.forEach((ans) => {
        let ansBtn = document.createElement('button');
        ansBtn.classList.add('btn')
        ansBtn.innerHTML = ans.text
        if(ans.isCorrect){
            ansBtn.dataset.isCorrect = ans.isCorrect
        }
        ansBtn.addEventListener('click', selectedAns)
        probableAnswers.appendChild(ansBtn)
    });
    scoreElement.innerHTML = 'Your Score: ' + score
}

nextBtn.addEventListener('click', () => {
    index++
    probableAnswers.innerHTML = ''
    quizOptionLoad()
    if(data.length > index){
        nextBtn.classList.add('hide')
    }
})

function selectedAns(e){
    Array.from(probableAnswers.children).forEach( (btn) => {
        if(btn.getAttribute('data-is-correct') == 'true'){
            btn.classList.add('correct')
            nextBtn.classList.remove('hide')
            
            if((data.length -1 ) === index){
                nextBtn.classList.add('hide')
                startBtn.classList.remove('hide')
                startBtn.innerHTML = 'start again'
            }
            if(e.target.classList.contains('correct')){
                score += 5
                scoreElement.innerHTML = 'Your Score: ' + score
            }
        }else{
            btn.classList.add('wrong')
        }
    })
}

startBtn.addEventListener('click', () => {
    probableAnswers.innerHTML = ''
    index = 0;
    score = 0;
    startBtn.classList.add('hide');
    quizGame.classList.remove('hide');
    quizContainer.classList.remove('hide')
    quizOptionLoad()
})
