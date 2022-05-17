const number = document.querySelector("#number");
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");

let count = 0;

decrease.addEventListener("click", decreaseNumber);
reset.addEventListener("click", resetNumber);
increase.addEventListener("click", increaseNumber);

 function decreaseNumber() {
   count -= 1;
   number.innerHTML = count;
   number.style.color = 'red';
 }
 function resetNumber() {
     count = 0;
  number.innerHTML = count;
  number.style.color = 'black';
}
function increaseNumber() {
    count += 1;
    number.innerHTML = count;
    number.style.color = 'green';
}
