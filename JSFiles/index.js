// ------------- navlinks active functionality-------------
let navbar=document.querySelectorAll(".collapse .nav-link");
console.log(navbar);
navbar.forEach((item)=>{
 item.addEventListener('click',()=>{
  navbar.forEach((nav)=>{
    nav.classList.remove('show');
  });
  item.classList.add('show');
 });
});