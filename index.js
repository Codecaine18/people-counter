// document.getElementById("countel").innerText = 5;

let count = 0 ;
// document.addEventListener("click",function click()=>
//     {

        
//     },1000);
// let countEl =  document.getElementById("countel");


function increment() {
    console.log("Button was clicked");
    count += 1;
    document.getElementById("countel").innerText = count;
    // or countEl.innerText = count ;

}

    function save()
    {console.log(" Save Button was clicked");
        console.log(count);
        document.getElementById("count-el").innerText += count + "  - ";
        document.getElementById("countel").innerText = 0;
        count = 0 ;
    } 


    // let username = 'kk';
    // let message = " You have three new notifications "
    // console.log( message + " , " + username + " ! ");