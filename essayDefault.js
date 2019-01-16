var lastRow = document.getElementById("lastRow");
if(lastRow.childElementCount === 3){
    lastRow.style.margin="25px 20% 0 20%";
    lastRow.addEventListener("onmouseon", lastRow.style.margin="25px 10% 0 10%");
}
if(lastRow.childElementCount === 2){
    lastRow.style.margin="25px 30% 0 30%";
    lastRow.addEventListener("onmouseon", lastRow.style.margin="25px 20% 0 20%");
}
if(lastRow.childElementCount === 1){
    lastRow.style.margin="25px 40% 0 40%";
    lastRow.addEventListener("onmouseon", lastRow.style.margin="25px 30% 0 30%");
}