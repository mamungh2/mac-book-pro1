// memory button event handler
document.getElementById('memory-button8GB').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;

    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    const memoryCostAmount = parseFloat(memoryCost.innerText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    const totalPrice = document.getElementById('total-price');
    const updatedTotal = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = updatedTotal;

    const discountedPrice = document.getElementById('discounted-price');
    discountedPrice.innerText = updatedTotal;



})
// memory button event handler
document.getElementById('memory-button16GB').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;

    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    const memoryCostAmount = parseFloat(memoryCost.innerText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    const totalPrice = document.getElementById('total-price');
    const updatedTotal = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = updatedTotal;

    const discountedPrice = document.getElementById('discounted-price');
    discountedPrice.innerText = updatedTotal;

})

// storage button event handler
document.getElementById('storage-button256GB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;

    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostText = memoryCost.innerText;
    const memoryCostAmount = parseFloat(memoryCostText);
    const storageCostAmount = parseFloat(storageCost.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    const totalPrice = document.getElementById('total-price');
    const updatedTotal = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = updatedTotal;

    const discountedPrice = document.getElementById('discounted-price');
    discountedPrice.innerText = updatedTotal;


})
document.getElementById('storage-button512GB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;


    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostText = memoryCost.innerText;
    const memoryCostAmount = parseFloat(memoryCostText);
    const storageCostAmount = parseFloat(storageCost.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    const totalPrice = document.getElementById('total-price');
    const updatedTotal = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = updatedTotal;

    const discountedPrice = document.getElementById('discounted-price');
    discountedPrice.innerText = updatedTotal;



})
document.getElementById('storage-button1TB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;


    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostText = memoryCost.innerText;
    const memoryCostAmount = parseFloat(memoryCostText);
    const storageCostAmount = parseFloat(storageCost.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseFloat(deliveryCostText);
    const totalPrice = document.getElementById('total-price');
    const updatedTotal = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = updatedTotal;

    const discountedPrice = document.getElementById('discounted-price');
    discountedPrice.innerText = updatedTotal;


})

// delivery charge event handler
document.getElementById('delivery-buttonFree').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;

    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostText = memoryCost.innerText;
    const memoryCostAmount = parseFloat(memoryCostText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    const deliveryCostAmount = parseFloat(deliveryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const updatedTotal = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = updatedTotal;

    const discountedPrice = document.getElementById('discounted-price');
    discountedPrice.innerText = updatedTotal;



})
document.getElementById('delivery-buttonCharge').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;

    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostText = memoryCost.innerText;
    const memoryCostAmount = parseFloat(memoryCostText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseFloat(storageCostText);
    const deliveryCostAmount = parseFloat(deliveryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const updatedTotal = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = updatedTotal;

    const discountedPrice = document.getElementById('discounted-price');
    discountedPrice.innerText = updatedTotal;
})

// promo button event handler
document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoInputText = promoInput.value;
    if (promoInputText == 'mamun') {
        const discountedPrice = document.getElementById('discounted-price');
        const discountedPriceText = discountedPrice.innerText;
        const discountedAmount = parseFloat(discountedPriceText);
        let calcDiscountedPrice = discountedAmount - (discountedAmount * 25 / 100);
        discountedPrice.innerText = calcDiscountedPrice;
        promoInput.value = '';

        console.log('hi');
    }
})