let isstatus = document.querySelector("h5");
let btn = document.querySelector("#add");

let check = 0;


btn.addEventListener("click", function () {


    if(check == 0){
    isstatus.innerHTML = "Freinds";
    isstatus.style.color = "green";
    btn.innerHTML = "Remove Friend";

    check = 1;
    }
    else{
        isstatus.innerHTML = "Stranger";
        isstatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;
    }
});

// let removefriend = document.querySelector("#remove");

// removefriend.addEventListener("click", function () {
//     isstatus.innerHTML = "Stranger";
//     isstatus.style.color = "red";
// })
