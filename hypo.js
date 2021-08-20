
//hypotaneous
var inputs = document.querySelectorAll('#inputs')
var calulateBtn = document.querySelector('#calculate')
var hypoOutputBox = document.querySelector('#output-box')

function checkValid() {
    var flag =0;
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].value === ""){
            flag = 1;
            break;
        }
    }
    if((flag === 1)){
        hypoOutputBox.innerText = "please fill all the fields"
    }
    else{
         calulateHyptenuse()
    }
  
    
}

function calulateHyptenuse() {

    var baseSquare = Math.pow(Number(inputs[0].value),2)
    var heightSquare = Math.pow(Number(inputs[1].value),2)
    var hypotenuse = Math.sqrt(baseSquare+heightSquare,2)
   hypoOutputBox.innerText = "the length of hypotaneous is " + hypotenuse
    
}

calulateBtn.addEventListener('click',checkValid)