//is triangle

var inputs = document.querySelectorAll('#inputs')

var calArea = document.querySelector('#calculate')
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
         calAreaOf()
    }
  
    
}

function calulateProduct(values) {
    var add=1
    for(var i=0;i<values.length;i++){
        add = add * Number(values[i].value)
        
    }
    return add;
}


function calAreaOf() {

    var product = calulateProduct(inputs)
    var result = product / 2
    
        outputBox.innerText = "are of the triangle is "+ result;
  
}




calArea.addEventListener('click',checkValid)
