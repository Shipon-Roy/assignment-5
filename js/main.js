/*memory cost using event handle */
function extraMemoryCost(cost, fee){
    const memoryCost = document.getElementById(cost);
    
    if(fee == true){
        memoryCost.innerText = '0';
    }
    else{
        memoryCost.innerText = '180';
    }
}
document.getElementById('8gb-memory').addEventListener('click', function(){
    extraMemoryCost('memory-cost', true);
    totalCalculation()
});
document.getElementById('16gb-memory').addEventListener('click', function(){
    extraMemoryCost('memory-cost', false); 
    totalCalculation()
});
/*storage cost using event handle */
function ssdStorage(storage, cost){
    const ssdCost = document.getElementById(storage);
    if(cost == true){
        ssdCost.innerText = '0';
    }
    else if(cost == false){
        ssdCost.innerText = '100';
    }
    else{
        ssdCost.innerText = '180';
    }
}
document.getElementById('256gb-storage').addEventListener('click', function(){
    ssdStorage('storage-cost', true);
    totalCalculation()
});
document.getElementById('512gb-storage').addEventListener('click', function(){
    ssdStorage('storage-cost', false)
    totalCalculation()
});
document.getElementById('1tb-storage').addEventListener('click', function(){
    ssdStorage('storage-cost')
    totalCalculation()
});
/* delivery charge using event handle */
function deliveryCharge(cost, fee){
    const deliveryCost = document.getElementById(cost);
    
    if(fee == true){
        deliveryCost.innerText = '0';
    }
    else if(fee == false){
        deliveryCost.innerText = '20';
    }
}
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCharge('delivery-charge', true);
    totalCalculation()
});
document.getElementById('charge-delivery').addEventListener('click', function(){
    deliveryCharge('delivery-charge', false);
    totalCalculation()
});
// total calculated
function totalCalculation(){
    const totalPrice = document.getElementById('total-price');
    const bestPrice = document.getElementById('best-price');
    const bestAmound = parseInt(bestPrice.innerText);

    const memoryPrice = document.getElementById('memory-cost');
    const memoryAmound = parseInt(memoryPrice.innerText);

    const ssdPrice = document.getElementById('storage-cost');
    const ssdAmound = parseInt(ssdPrice.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryAmound = parseInt(deliveryCharge.innerText);

    const total =bestAmound + memoryAmound + ssdAmound + deliveryAmound;
    totalPrice.innerText = total;

    document.getElementById('total-cost').innerText = total;
}

/* Pomo Code handle using event */
function getpromoCode(){
    const totalPrice = document.getElementById('total-price');
    const bestPrice = document.getElementById('best-price');
    const bestAmound = parseInt(bestPrice.innerText);

    const memoryPrice = document.getElementById('memory-cost');
    const memoryAmound = parseInt(memoryPrice.innerText);

    const ssdPrice = document.getElementById('storage-cost');
    const ssdAmound = parseInt(ssdPrice.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryAmound = parseInt(deliveryCharge.innerText);

    const total =bestAmound + memoryAmound + ssdAmound + deliveryAmound;
    const promoCode = total -(total*0.2);

    document.getElementById('total-cost').innerText = promoCode;
}
document.getElementById('promo-code').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
    if(promoCode == 'stevekaku'){
        getpromoCode();
    }
    promoInput.value = '';
});