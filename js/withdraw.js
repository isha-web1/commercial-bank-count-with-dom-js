document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);
    console.log(newWithdrawAmount)
     const totalWithdraw = document.getElementById('withdraw-total');
     
     const previousWithdrawString = totalWithdraw.innerText;
     
     
     
     const newWithdraw = parseFloat(previousWithdrawString);
     
     const currentWithdraw = newWithdrawAmount + newWithdraw;
      totalWithdraw.innerText = currentWithdraw;
      
      const balanceTotalAmount = document.getElementById('balance-total');
      const balanceTotalString = balanceTotalAmount.innerText;
      const balanceAmount = parseFloat(balanceTotalString);
      const currentTotalAmount = balanceAmount - currentWithdraw;
       balanceTotalAmount.innerText = currentTotalAmount;
       withdrawField.value  = '';

})