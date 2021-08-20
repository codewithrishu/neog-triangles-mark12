var quizForm = document.querySelector('#form-container')
var submitBtn = document.querySelector('#submit-btn')
var outputBox = document.querySelector('#output-box')

var answers = ['85°','90°','Equilateral triangle','12','one right angle']

function findScore() {
        var score = 0;
        var index = 0;
        var myForm = new FormData(quizForm)
        for(value of myForm.values()){
            if(value === answers[index]){
                score = score + 1;
            }
            index = index +1;
        }

    outputBox.innerText = "your Score is = " + score; 
    
}

submitBtn.addEventListener('click',findScore)