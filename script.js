let counter = document.querySelector(".value");
let minus_btn = document.querySelector(".minus-btn");
let plus_btn = document.querySelector(".plus-btn");
let text= document.querySelector('.text');
let reset=document.querySelector('.reset');

plus_btn.addEventListener("click", () => {
    let value=parseInt(counter.innerHTML);
    let changevalue=parseInt(text.value);;
    // counter.innerHTML++;
    counter.innerHTML=value+changevalue;
});
minus_btn.addEventListener("click", () => {
  let value = parseInt(counter.innerHTML);
  let changevalue = parseInt(text.value);
  // counter.innerHTML++;
  counter.innerHTML = value - changevalue;
});

reset.addEventListener('click',()=>{
    counter.innerHTML=0;
});
