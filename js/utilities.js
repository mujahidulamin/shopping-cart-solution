function getTextElementById(elementId) {
    const currentPhoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = currentPhoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementById(elementId, value){
    const subTotalElment = document.getElementById(elementId);
    subTotalElment.innerText = value;
}


function calculateSubtotal() {
    // calculate sub total
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const curretnSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementById('sub-total', curretnSubTotal);

    //calculate tax

    const taxAmountString = (curretnSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amount', taxAmount);

    //calculate final total

    const finalTotal = curretnSubTotal + taxAmount;
    setTextElementById('final-total', finalTotal);



}