let count =1;
let store =0;
const allElements = document.querySelectorAll('.card');
// console.log(allElements);
for (let i = 0; i < allElements.length; i++) {
    
    const clicks =(allElements[i]);
    clicks.addEventListener('click',(e) =>{
const name = clicks.childNodes[3].childNodes[3].textContent;
const price = clicks.childNodes[3].childNodes[5].textContent.split(' ')[1];
console.log(name);
// const pareseInt =parseInt(price)





const callNamePrice = document.getElementById('title-container');
// callNamePrice.innerText = namePrice
const div = document.createElement('div');
div.style.display ='flex';
div.style.justifyContent ="space-between";

const h6 = document.createElement('h6');
h6.innerText =count + "." + name;
count++;
const h6T = document.createElement('h6');
h6T.innerText =price;
div.appendChild(h6);
div.appendChild(h6T);
callNamePrice.appendChild(div);

const totalP =document.getElementById('totalPrice');
store = store + parseInt(price);
totalP.innerText =store;



// 
// // console.log(btn);

//    
//     const dis = document.getElementById('discountPrice');
// //   console.log(typeof dis);
// // const ff = parseInt(dis)
//             const discount = totalP * 0.2;
//             console.log(typeof discount);
//             dis.textContent = discount;
        
    
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click',() => {
    const input =document.getElementById('input-field').value;
// console.log("clicked");
const modify =input.split(' ').join('').toUpperCase();
// console.log(modify);
if (store > 200) {
    const dis = document.getElementById('discountPrice');
    if (modify == "SELL20") {
        const discount = store * 0.2;
        const finalPrice =discount.toFixed(2);
        dis.innerText =finalPrice;
        // return finalPrice;
        const totalPrices = store - finalPrice;
        // console.log(totalPrices);
        const total = document.getElementById('total');
        total.innerText = totalPrices;
    }else{
        alert("invalid coupon price")
    }
}else{
    alert('minimum purchase price $ 200')
}



})