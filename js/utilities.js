function getUserInputValue(userInput) {
    const newInputValue = document.getElementById(userInput);
    const newValue = parseFloat(newInputValue.value);
    newInputValue.value = '';
    return newValue;
}
function getTotalValue(totalValue){
    const previousTotalValue = document.getElementById(totalValue);
    const previousTotal = parseFloat(previousTotalValue.innerText);
    return previousTotal;
}




