let first = document.getElementById("first");
let last = document.getElementById("last");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let buttons = document.getElementById("btn");
console.log(buttons.value)
function func()
{
    console.log(first.value,last.value,phone.value,email.value);
    alert(`First Name: ${first.value} \nLast Name: ${last.value} \nPhone Number: ${phone.value} \nEmail Id: ${email.value}`)
}
buttons.addEventListener("click",func);