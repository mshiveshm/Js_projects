const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
console.log(buttons);

buttons.forEach(function (button) {
console.log(button);
button.addEventListener('click',function(e){
    console.log(e);
     console.log(e.id);
     if(e.target.id==='grey'){
        body.style.background=e.target.id;
     }
     if(e.target.id==='white'){
        body.style.background=e.target.id;
     }
     if(e.target.id==='blue'){
        body.style.background=e.target.id;
     }
     if(e.target.id==='yellow'){
        body.style.background=e.target.id;
     }
     if(e.target.id==='purple'){
        body.style.background=e.target.id;
     }
     if(e.target.id==='green'){
        body.style.background=e.target.id;
     }
     if(e.target.id==='orange'){
        body.style.background=e.target.id;
     }
});
});