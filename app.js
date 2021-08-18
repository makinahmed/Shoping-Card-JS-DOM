
function total() {
    let phoneSubTotal = document.getElementById('phone-total');
    let caseSubTotal = document.getElementById('case-total');
    let subTotal = parseInt(phoneSubTotal.innerText) + parseInt(caseSubTotal.innerText)
    document.getElementById('sub-total').innerText = subTotal;

    let tax = Math.ceil((5 / 100) * subTotal);
    let total = Math.ceil(subTotal + ((5 / 100) * subTotal))

    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;


}

function updateProduct(productName, isIncreasing) {

    let productNumber = document.getElementById(productName + '-number');
    let productQuantity = parseInt(productNumber.value)

    if (isIncreasing) {
        productQuantity = productQuantity + 1;
    }
    else {
        if (productQuantity > 0) {
            productQuantity = productQuantity - 1;
        }
    }
    productNumber.value = productQuantity;

    if (productName === 'phone') {
        productPrice = productQuantity * 1219;
        document.getElementById(productName + '-total').innerText = productPrice
    }
    else if (productName === 'case') {
        productPrice = productQuantity * 59;
        document.getElementById(productName + '-total').innerText = productPrice
    }

    // subtotal
    total()


}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', true)
})


document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', false)

})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', true)
})


document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', false)

})


