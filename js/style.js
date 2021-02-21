// Кнопка позвонить 
let call = document.querySelector('.call__btn')
let modal = document.querySelector('.modal_window_call')
let close = document.querySelector('.close_modal')
// menu_burger
let burger = document.querySelector('.menu_burger')
let menu_burger = document.querySelector('.menu_berger_list')
let close_burger = document.querySelector('.menu_berger_list_close')
// Contract
let contract = document.querySelector('.contract_modal_window')
let contract_open = document.querySelector('.contract')
let contract_open_nav = document.querySelector('.nav_contract')
let contract_close = document.querySelector('.contract_modal_window_close')
let contract_back = document.querySelector('.contract_back')



// Подложка
let close_back = document.querySelector('.close_end')

 call.onclick = function () {
    modal.style.display = "block";
   close_back.style.display = "block";
   menu_burger.style.display = "none";
 }

 close.onclick = function () {
    modal.style.display = "none";
   close_back.style.display = "none";
 }  

// let close_back = document.querySelector('.close_end')

// menu_burger
burger.onclick = function () {
   menu_burger.style.display = "block";
   close_back.style.display = "block";
   modal.style.display = "none";
}
close_burger.onclick = function name() {
   menu_burger.style.display = "none";
   close_back.style.display = "none";
}

close_back.onclick = function () {
   menu_burger.style.display = "none";
   modal.style.display = "none";
   close_back.style.display = "none";
}

// contract

contract_open.onclick = function () {
   contract.style.display = "block";
   contract_back.style.display = "block";
   menu_burger.style.display = "none";
}

contract_open_nav.onclick = function () {
   contract.style.display = "block";
   contract_back.style.display = "block";
}

contract_close.onclick = function () {
   contract.style.display = "none";
   contract_back.style.display = "none";
}
contract_back.onclick = function () {
   contract.style.display = "none";
   contract_back.style.display = "none";
}