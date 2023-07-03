let loanAmount = document.getElementById("amount");
let interestRate=document.getElementById("interest");
let loanDuration = document.getElementById("loanTenure");
let submit = document.getElementById("calculate");

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    calculateEMI();
})

function calculateEMI(){
    let isYear = document.querySelector("#year").checked;
    let isMonth  = document.querySelector("#month").checked;
    let noOfMonths=0;

    if(isYear== "" && isMonth== ""){
        alert("select year and month")
    }else{
        if(isYear){
            noOfMonths = loanDuration.value * 12;
        }else{
            noOfMonths = loanDuration.value;
        }
    }
    console.log(noOfMonths)
}