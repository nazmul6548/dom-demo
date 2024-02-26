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
// console.log(store);
// const sum = parent(totalP) + 
totalP.innerText =store

    })
}