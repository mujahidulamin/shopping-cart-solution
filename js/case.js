function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);
    
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalFieldElement = document.getElementById('case-total');
    caseTotalFieldElement.innerText = caseTotalPrice;
}


document.getElementById('case-btn-plus').addEventListener('click', function(){
   const newCaseNumber = updateCaseNumber(true);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubtotal();
})
  
document.getElementById('btn-case-minus').addEventListener('click', function(){
   const newCaseNumber = updateCaseNumber(false);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubtotal();
})