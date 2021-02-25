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
let conditions_btn = document.querySelector('.title_conditions')
let contract_btn = document.querySelector('.title_contract')
let contract_text = document.querySelector('.contract_modal_window_contract')
let conditions_text = document.querySelector('.contract_modal_window_conditions')
//  Окно car_price 


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
   lancer_window.style.display = "none"
   kia_rio_window.style.display = "none"
   mazda_window.style.display = "none"
   mazda_next_window.style.display = "none"
   KIA_Sportage_window.style.display = "none"
   Hyundai_accent_window.style.display = "none"
   Hyundai_accent_next_window.style.display = "none"
   Hyundai_accent_next_to_window.style.display = "none"
   KIA_Rio_Next_window.style.display = "none"
}

// contract

contract_open.onclick = function () {
   contract.style.display = "block";
   contract_back.style.display = "block";
   menu_burger.style.display = "none";
}
// Окно условия и договор 
contract_open_nav.onclick = function () {
   contract.style.display = "block";
   contract_back.style.display = "block";
   contract_text.style.display = "none";
   conditions_text.style.display = "block";
   conditions_btn.style.border = "1px solid #00aeff";
}

contract_close.onclick = function () {
   contract.style.display = "none";
   contract_back.style.display = "none";
   contract_btn.style.border = "none";
   conditions_btn.style.border = "none";
}
contract_back.onclick = function () {
   contract.style.display = "none";
   contract_back.style.display = "none";
   contract_btn.style.border = "none";
   conditions_btn.style.border = "none";
}
// Условия проката 
conditions_btn.onclick = function () {
   contract_text.style.display = "none";
   conditions_text.style.display = "block";
   contract_btn.style.border = "none";
   conditions_btn.style.border = "1px solid #00aeff";
}

// Договор
contract_btn.onclick = function () {
   conditions_text.style.display = "none";
   contract_text.style.display = "block";
   conditions_btn.style.border = "none";
   contract_btn.style.border = "1px solid #00aeff";
}

// окно цены авто 
// lancer
let lancer = document.querySelector('.lancer')
let lancer_window = document.querySelector('.lancer_window')
let close_lancer = document.querySelector('.lancer_close')

lancer.onclick = function () { 
   lancer_window.style.display = "block"
   close_back.style.display = "block";
   
}

close_lancer.onclick = function () { 
   lancer_window.style.display = "none"
   close_back.style.display = "none";
}
// kia
let kia_rio = document.querySelector('.Kia_rio')
let kia_rio_window = document.querySelector('.Kia_rio_window')
let close_kia = document.querySelector('.Kia_close')

kia_rio.onclick = function () { 
   kia_rio_window.style.display = "block"
   close_back.style.display = "block";
}

close_kia.onclick = function () { 
   kia_rio_window.style.display = "none"
   close_back.style.display = "none";
}
// mazda 
let mazda = document.querySelector('.mazda')
let mazda_window = document.querySelector('.mazda_window')
let close_mazda = document.querySelector('.mazda_close')

mazda.onclick = function () { 
   mazda_window.style.display = "block"
   close_back.style.display = "block";
}

close_mazda.onclick = function () { 
   mazda_window.style.display = "none"
   close_back.style.display = "none";
}
// mazda_next

let mazda_next = document.querySelector('.mazda_next')
let mazda_next_window = document.querySelector('.mazda_next_window')
let close_mazda_next = document.querySelector('.mazda_next_close')

mazda_next.onclick = function () { 
   mazda_next_window.style.display = "block"
   close_back.style.display = "block";
}

close_mazda_next.onclick = function () { 
   mazda_next_window.style.display = "none"
   close_back.style.display = "none";
}

// KIA_Sportage

let KIA_Sportage = document.querySelector('.KIA_Sportage')
let KIA_Sportage_window = document.querySelector('.KIA_Sportage_window')
let close_KIA_Sportage = document.querySelector('.KIA_Sportage_close')

KIA_Sportage.onclick = function () { 
   KIA_Sportage_window.style.display = "block"
   close_back.style.display = "block";
}

close_KIA_Sportage.onclick = function () { 
   KIA_Sportage_window.style.display = "none"
   close_back.style.display = "none";
}
// Hyundai_accent

let Hyundai_accent = document.querySelector('.Hyundai_accent')
let Hyundai_accent_window = document.querySelector('.Hyundai_accent_window')
let close_Hyundai_accent = document.querySelector('.Hyundai_accent_close')

Hyundai_accent.onclick = function () { 
   Hyundai_accent_window.style.display = "block"
   close_back.style.display = "block";
}

close_Hyundai_accent.onclick = function () { 
   Hyundai_accent_window.style.display = "none"
   close_back.style.display = "none";
}

// Hyundai_accent_next

let Hyundai_accent_next = document.querySelector('.Hyundai_accent_next')
let Hyundai_accent_next_window = document.querySelector('.Hyundai_accent_next_window')
let close_Hyundai_accent_next = document.querySelector('.Hyundai_accent_next_close')

Hyundai_accent_next.onclick = function () { 
   Hyundai_accent_next_window.style.display = "block"
   close_back.style.display = "block";
}

close_Hyundai_accent_next.onclick = function () { 
   Hyundai_accent_next_window.style.display = "none"
   close_back.style.display = "none";
}
// Hyundai_accent_next_to

let Hyundai_accent_next_to = document.querySelector('.Hyundai_accent_next_to')
let Hyundai_accent_next_to_window = document.querySelector('.Hyundai_accent_next_to_window')
let close_Hyundai_accent_next_to = document.querySelector('.Hyundai_accent_next_to_close')

Hyundai_accent_next_to.onclick = function () { 
   Hyundai_accent_next_to_window.style.display = "block"
   close_back.style.display = "block";
}

close_Hyundai_accent_next_to.onclick = function () { 
   Hyundai_accent_next_to_window.style.display = "none"
   close_back.style.display = "none";
}
// KIA_Rio_Next
let KIA_Rio_Next = document.querySelector('.KIA_Rio_Next')
let KIA_Rio_Next_window = document.querySelector('.KIA_Rio_Next_window')
let close_KIA_Rio_Next = document.querySelector('.KIA_Rio_Next_close')

KIA_Rio_Next.onclick = function () { 
   KIA_Rio_Next_window.style.display = "block"
   close_back.style.display = "block";
}

close_KIA_Rio_Next.onclick = function () { 
   KIA_Rio_Next_window.style.display = "none"
   close_back.style.display = "none";
}