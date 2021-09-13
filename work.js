//is triangle

var inputs = document.querySelectorAll('#inputs')

var isTriangle = document.querySelector('#is-triangle')
var outputBox = document.querySelector('#output-box')


function checkValid() {
    var flag =0;
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].value === "" || inputs[i].value <= 0){
            flag = 1;
            break;
        }
    }
    if((flag === 1)){
        outputBox.innerText = "please check the fields again"
    }
    else{
        checkTriangle()
    }
  
    
}

function calulateSum(values) {
    var add=0
    for(var i=0;i<values.length;i++){
        add = add + Number(values[i].value)
        
    }
    return add;
}


function checkTriangle() {

    var sum = calulateSum(inputs)
    if(sum === 180){
        outputBox.innerText = "Yay, the angles form a triangle!";
    }
    else{
        outputBox.innerText = "Oh Oh! The angle doesn't form a triangle";
    }
}




isTriangle.addEventListener('click',checkValid)
