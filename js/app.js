'use strict';


function Food( id , name , type , price ){
    this.foodId=id;
    this.foodName=name;
    this.foodType=type;
    this.foodPrice=price;
}
function generateId(){
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}
Food.prototype.render = function () {
    let foodT = document.getElementById('foodT');
    let fr=document.createElement('tr');
    foodT.appendChild(fr);
    let fI=document.createElement('td');
    let fN=document.createElement('td');
    let fT=document.createElement('td');
    let fP=document.createElement('td');
    fr.appendChild(fI)
    fr.appendChild(fN);
    fr.appendChild(fT);
    fr.appendChild(fP);
    fI.textContent=this.foodId;
    fN.textContent = this.foodName;
    fT.textContent = this.foodType;
    fP.textContent = this.foodPrice;
}

function handler(e){
    e.preventDefault();
    let foodNO = e.target.foodName.value;
    let foodTO = e.target.foodM.value;
    let foodPO = e.target.foodPrice.value;

    let foodO = new Food( generateId() , foodNO, foodTO, foodPO);
    
    foodO.render();
    console.log( generateId(),foodName, foodM ,foodPrice);
};

let saveValues = document.getElementById('foodForm');
saveValues.addEventListener('submit', handler)
