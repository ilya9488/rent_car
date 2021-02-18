let call = document.querySelector('.call__btn')
let modal = document.querySelector('.modal_window_call')
let close = document.querySelector('.close_modal')

 call.onclick = function () {
    modal.style.display = "block";
 }

 close.onclick = function () {
    modal.style.display = "none";
 }  

let burger = document.querySelector('.menu_burger')
let menu_burger = document.querySelector('.menu_berger_list')
let close_burger = document.querySelector('.menu_berger_list_close')
let close_burger_lists = document.querySelectorAll('a.close_a')

burger.onclick = function () {
   menu_burger.style.display = "block" 
}
close_burger.onclick = function name() {
   menu_burger.style.display = "none";
}

close_burger_lists.addEventListener('click',  function () {
   menu_burger.style.display = "none";
})
