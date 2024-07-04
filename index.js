// document.getElementById("countel").innerText = 5;

let count = 0 ;
// document.addEventListener("click",function click()=>
//     {

        
//     },1000);
let countEl =  document.getElementById("countel");


function increment() {
    console.log("Button was clicked");
    count = count + 1;
    document.getElementById("countel").innerText = count;
    // or countEl.innerText = count ;
    console.log(count);

}