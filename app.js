
function updateProductNumber(product,  price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}


// phone increasing decrease event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219, true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone', 1219, false);
})

// phone catching increase decrease event

document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case', 59, true);
   /*  const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
 */
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case', 59, false);
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1; */
});

