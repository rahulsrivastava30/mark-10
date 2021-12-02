const billAmount=document.querySelector("#bill-amount");
const checkButton=document.querySelector("#check-button");
const cashGiven=document.querySelector("#cash-given");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".numberOfNotes");
const availableNotes=[2000,500,200,100,50,20,10,5,2,1];

checkButton.addEventListener("click",function validateBillAmountAndCashAmount(){
    console.log(cashGiven.value,billAmount.value)
    var cash=parseInt(cashGiven.value);
    var bill=parseInt(billAmount.value);
    
    message.style.display="none";
    if(cash<0|| bill<0 ) showMessage(message,"CashGiven or billAmount can't be negative.");
    else{if(billAmount.value>0){
        if(cash>=bill){
            const amountToBeReturned=cash-bill;
            calculateChange(amountToBeReturned);
        }else{
            showMessage(message,"Cash given is lesser than the bill amount")
        }
    }else{
       showMessage(message,"Invalid Bill amount");
    }}
});

function calculateChange(amountToBeReturned){
    for(var i=0;i<availableNotes.length;i++){
        var noNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned=amountToBeReturned%availableNotes[i];
        noOfNotes[i].innerText=noNotes;
    }
}

function showMessage(message,messageText){
    message.style.display="block";
    message.innerText=messageText;
}