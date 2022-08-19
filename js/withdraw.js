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
            const withdraw = document.getElementById('withdraw-total');
            withdraw.innerText = newWithdraw + previousWithdrawTotal;
         

            //total new balance 
            const balance = document.getElementById('balance-total');
            balance.innerText = previousTotalBalance - newWithdraw;

        }
        else {
            alert('You have not much money');
        }

    }
    else {
        alert('Enter a valid number');
    }


})