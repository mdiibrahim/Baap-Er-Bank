document.getElementById('btn-withdraw').addEventListener('click', function () {
    //user give withdraw
    const newWithdraw = getUserInputValue('user-withdraw')

    if (Number.isNaN(newWithdraw) === false && Math.sign(newWithdraw) === 1) {
        //previous balance
        const previousTotalBalance = getTotalValue('balance-total');
        if (newWithdraw <= previousTotalBalance) {
            //previous withdraw amount
            const previousWithdrawTotal = getTotalValue('withdraw-total');
            //total withdraw amount
            const currentWithdrawTotal = newWithdraw + previousWithdrawTotal;

            previousWithdrawTotalValue.innerText = currentWithdrawTotal;

            //total new balance 
            const newTotalBalance = previousTotalBalance - newWithdraw;

            previousTotalBalanceValue.innerText = newTotalBalance;
        }
        else {
            alert('You have not much money');
        }

    }
    else {
        alert('Enter a valid number');
    }


})