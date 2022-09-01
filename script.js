let billingAmt=document.querySelector("#bill")
let persons=document.querySelector("#totalPerson")
let tipOptions=document.querySelector(".tip-options")
let tipPerPerson=document.querySelector("#tipperperson")
let totalPerPerson=document.querySelector("#totalperperson")
let valid=document.querySelector(".validation")

let percent=0
let tp=0

function tipPercent(i){
  
  percent=i;
  reset()
    
}

function totalPerson(i){
  tp=i
  reset()
}

function reset(){
  if(tp==0){
    valid.style.display="block"
  }
  else{
    valid.style.display="none"
    tipPerPerson.innerHTML=(((billingAmt.value*percent)/100)/tp).toFixed(2)
    totalPerPerson.innerHTML=((billingAmt.value)/tp + ((billingAmt.value*percent)/100)/tp).toFixed(2)
  }
}

var input = document.getElementById("totalPerson");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      totalPerson(e.target.value);
    }
  });

var tipCustom = document.getElementById("x");
  tipCustom.addEventListener("keydown", function (e) {
   if (e.key === "Enter") {  
     tipPercent(e.target.value);
   }
 });

 function reload(){
  billingAmt.value=""
  persons.value=""
  tipCustom.value=""
 }