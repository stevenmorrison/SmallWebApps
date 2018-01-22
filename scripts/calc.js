$(document).ready(function(){
  var inputs=[""];
  var totalStr;
  var operators = ["+","-","/","*"];
  var operatorsTwo = ["."];
  var nums=[0,1,2,3,4,5,6,7,8,9];
  function getVal(input){
     if(operatorsTwo.includes(inputs[inputs.length-1])===true && input==="."){
    console.log("Duplicate '.'");
  }
    else if(inputs.length===1 && operators.includes(input)===false){
      inputs.push(input);
    }
  else if(operators.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  function update(){
    totalStr= inputs.join("");
    $("#steps").html(totalStr);
  }
  function getTotal(){
    totalStr = inputs.join("");
    $("#steps").html(eval(totalStr));
  }
  
  $("a").on("click",function(){
    if(this.id==="delAll"){
      inputs = ["0"];
      update();
    }
    else if(this.id==="del"){
      inputs.pop();
      update();
    }
    else if(this.id==="="){
      getTotal();
    }
    else{
      
      
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
        getVal(this.id);
      }
      else {
        getVal(this.id);
      }
    } 
  });
  
});
