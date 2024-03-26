const allbtn = document.getElementsByClassName("add-btn");
document.getElementById("apply-Coupon").disabled= true;

for (btn of allbtn) {
  btn.addEventListener("click", function (e) {

    

    const placeName = e.target.parentNode.childNodes[3].innerText;

    const price = document.getElementById("price").innerText;
    const busClass = document.getElementById("Available").innerText;
    const SelectedDiv = document.getElementById("Selected-div");


    e.target.style.backgroundColor = "green";
    e.target.style.color = "white";
    e.target.setAttribute('disabled', false);



    const setSeatCount = getConvertValue('seat-count');
     
    

    if(setSeatCount + 1 >= 4){

      document.getElementById("apply-Coupon").disabled= false;

      } 
       if (setSeatCount + 1 == 5){
        alert ('You have selected your limit 4 seats.Get coupon code offer for selecting 4 seats')
        
      }

      

    const seatleft = getConvertValue('seat-left')
    document.getElementById('seat-left').innerText = seatleft - 1;

    const seatCount = getConvertValue('seat-count');
    document.getElementById('seat-count').innerText = seatCount + 1;

    const p = document.createElement("p");
    const p2 = document.createElement("p2");
    const p3 = document.createElement("p3");

    p.innerText = placeName;
    p2.innerText = busClass;
    p3.innerText = price;

    SelectedDiv.appendChild(p);
    SelectedDiv.appendChild(p2);
    SelectedDiv.appendChild(p3);

    updateTotalPrice(price);
    // updateGrandTotal();
  });
}

if (setSeatCount + 1 <= 4){
  
}

function discountCupon(){

  const cuponCode = document.getElementById('cupon-text').value;

  if ( cuponCode == "NEW15") {
    const seatPrice = getConvertValue('total-price');
    const discountPriceRound = seatPrice * 0.15;
    const discountPrice = Math.floor(discountPriceRound);
    document.getElementById("grand-total").innerText = seatPrice - discountPrice;
    return;
    
  }if (cuponCode == 'Couple 20') {
    const seatPrice = getConvertValue('total-price');
    const discountPrice = seatPrice * 0.20;
    document.getElementById("grand-total").innerText = seatPrice - discountPrice;
    return;
    
  } else {
    alert("please enter valid coupon code");
    const seatPrice = getConvertValue('total-price');
    document.getElementById("grand-total").innerText = seatPrice;
    return;
  }
}

function updateTotalPrice(price) {
  const totalPrice = getConvertValue("total-price");
  const sum = totalPrice + parseInt(price);
  document.getElementById("total-price").innerText = sum;
  document.getElementById("grand-total").innerText = sum;
}

function getConvertValue(id) {
  const Price = document.getElementById(id).innerText;
  const convertPrice = parseInt(Price);
  return convertPrice;
}

function nextPage() {
  const nextPage3 = document.getElementById("next-page2");
  nextPage3.classList.remove("hidden");
  const homePage = document.getElementById("home-page")
  homePage.classList.add("hidden");
}

function successPage() {
  const homePage = document.getElementById("home-page")
  homePage.classList.remove("hidden");
  const nextPage3 = document.getElementById("next-page2");
  nextPage3.classList.add("hidden");
}

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));