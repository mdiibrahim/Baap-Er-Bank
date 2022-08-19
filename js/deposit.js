document.getElementById('btn-deposit').addEventListener('click', function () {
    //user give deposit
    const newDeposit = getUserInputValue('user-deposit');

    if (Number.isNaN(newDeposit) === false && Math.sign(newDeposit) == 1) {
        //previous deposit amount
        const previousDepositTotal = getTotalValue('deposit-total');
        //total deposit amount
        const currentDepositTotal = newDeposit + previousDepositTotal;

        previousDepositTotalValue.innerText = currentDepositTotal;
        //previous balance
        const previousTotalBalance = getTotalValue('balance-total');
        //total new balance 
        const newTotalBalance = previousTotalBalance + newDeposit;

        previousTotalBalanceValue.innerText = newTotalBalance;

    }

})