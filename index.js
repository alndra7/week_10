let priceScrewdriver = document.getElementById('screwdriver');
let priceAngle = document.getElementById('angle');
let priceKit = document.getElementById('kit');
let priceMiller = document.getElementById('miller');
let total = document.getElementById('total-value')

let totalPrice = +priceAngle.innerHTML + +priceScrewdriver.innerHTML + +priceKit.innerHTML + +priceMiller.innerHTML;
console.log(totalPrice);

total.textContent = (totalPrice);

button.addEventListener('click', () => {
    let discount = totalPrice*0.80;
    total.textContent = (discount); 
  });

