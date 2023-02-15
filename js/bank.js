document.getElementById('deposit-btn').addEventListener('click', function(){
    const dipositField = document.getElementById('deposit-field');
    const newDipositValueString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositValueString)

    const totalDeposit = document.getElementById('deposit-total');
    const previousDepositString = totalDeposit.innerText;
  
    const newDeposit = parseFloat(previousDepositString);
    const currentDepositTotal = newDipositAmount + newDeposit;
    
    totalDeposit.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const newBalance = parseFloat(previousBalanceString);
    console.log(newBalance)
    const newBalanceTotal = newBalance + newDipositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    dipositField.value = '';
    
})