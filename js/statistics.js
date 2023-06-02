'use strict';
let foodarray=window.localStorage.getItem("foodarr");
foodarray=JSON.parse(foodarray);
 function render(){
    for(let i = 0; i<foodarray.length;i++){
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
    fI.textContent= foodarray[i].foodId;
    fN.textContent = foodarray[i].foodName;
    fT.textContent = foodarray[i].foodType;
    fP.textContent = foodarray[i].foodPrice;

}}
render();