function updatePhoneNumber(isIncrease) {
    const phoneNumberFieldElement = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberFieldElement.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberFieldElement.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatephoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalFieldElement = document.getElementById('phone-total');
    phoneTotalFieldElement.innerText = phoneTotalPrice;
}



document.getElementById('phone-btn-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatephoneTotalPrice(newPhoneNumber);
    calculateSubtotal();
})


document.getElementById('phone-btn-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatephoneTotalPrice(newPhoneNumber);
    calculateSubtotal();
})