'use strict';
let foodarr=[];
function Food( id , name , type , price ){
    this.foodId=id;
    this.foodName=name;
    this.foodType=type;
    this.foodPrice=price;
    foodarr.push(this);
}
function generateId(){
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}

function handler(e){
    e.preventDefault();
    let foodNO = e.target.foodName.value;
    let foodTO = e.target.foodM.value;
    let foodPO = e.target.foodPrice.value;

    let foodO = new Food( generateId() , foodNO, foodTO, foodPO);
    
    // foodO.render();
    console.log( generateId(),foodName, foodM ,foodPrice);
    let jsonObject= JSON.stringify(foodarr);
    window.localStorage.setItem("foodarr",jsonObject);
};

let saveValues = document.getElementById('foodForm');
saveValues.addEventListener('submit', handler)

