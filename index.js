const priceScrewdriver = document.getElementById('screwdriver');
const priceAngle = document.getElementById('angle');
const priceKit = document.getElementById('kit');
const priceMiller = document.getElementById('miller');
const total = document.getElementById('total-value')

const totalPrice = +priceAngle.innerHTML + +priceScrewdriver.innerHTML + +priceKit.innerHTML + +priceMiller.innerHTML;

total.textContent = (totalPrice);

function calc () {
  const discount = totalPrice*0.80;
  total.textContent = (discount); 
}

button.addEventListener('click', calc);

//button.addEventListener('click', () => {
  //const discount = totalPrice*0.80;
    //total.textContent = (discount); 
  //});

