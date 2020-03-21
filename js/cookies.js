// const cookieContainer = document.querySelector(".container-cookies")
// const cookieBtn = document.querySelector("btn-cookie")

// cookieBtn.addEventListener("click",()=>{
//     cookieContainer.classList.remove("active");
// });

// setTimeout( ()=> {
//     cookieContainer.classList.add("active");
// }, 2000);

$(document).ready(function(){
    $(".btn-cookie").click(function(){
      $(".banner").slideUp(500);
    });
  });