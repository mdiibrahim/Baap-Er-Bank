document.getElementById('btn-deposit').addEventListener('click', function () {
    //user give deposit
    const newDeposit = getUserInputValue('user-deposit');

    if (Number.isNaN(newDeposit) === false && Math.sign(newDeposit) === 1) {
        //previous deposit amount
        const previousDepositTotal = getTotalValue('deposit-total');
        
        //total deposit amount
        const deposit = document.getElementById("deposit-total");

        const currentDeposit = newDeposit + previousDepositTotal;
        deposit.innerText = currentDeposit;

        //previous balance
        const previousTotalBalance = getTotalValue('balance-total');
        //total new balance 
        const balance = document.getElementById("balance-total");
        balance.innerText = newDeposit + previousTotalBalance;

    }
    else {
        alert('Enter a valid number');
    }

})