// function sayHi(){
//     console.log('Hi');
// }
// window.setInterval(sayHi, 5000);


// window.setInterval(()=>{console.log('hi')}, 3000);



// setInterval(()=>{let x=1; console.log(`Count ${x}`); x++;}, 1000);


// let x=1
// setInterval(()=>{ console.log(`Count ${x}`); x++;}, 1000);


const quadro = document.querySelector("#square");

// let r = 10;
// let x = 50;

// window.setInterval(()=>{
//     //Alterar altura e comprimento

//     x+=10;
//     square.style.height = `${x}px`;
//     square.style.width = `${x}px`;
//     square.style.transform = `rotate(${r}deg)`;
//     square.style.borderRadius=`${r/2}px`;
//     r++;

// }, 250);

// let pY= -500;

// window.setInterval(()=>{
//     console.log(quadro.style.top);
//    quadro.style.top=`${pY}px`;
 

//     if (pY>=50){
//         pY= 50;
//     } 

//     pY++;

// },10);

// let t = -500;

// const quadroA = window.setInterval(()=>{
//     console.log(quadro.style.top);
//     quadro.style.top=`${t}px`;
//     if (t>=20){
//         clearInterval(quadroA);
//     }
// t+=1;
// },1/*Time to set*/);

// window.clearInterval(interval);


// window.document.body.onmousemove=()=>{

//     console.log(event.clientX, event.clientY);
// };


// let pX=0;
// let pY=0;


// document.body.onclick=(event)=>{
//     const mov=window.setInterval(()=>{
//         if (pX == event.clientX){
//             clearInterval(mov);
//         }
    
//     quadro.style.position = `absolute`;
//     quadro.style.top=`${event.clientY - pY}px`;
//     quadro.style.left=`${event.clientX - pX}px`;

// }, 20)
// }

// function watch (){
//     var time= new Date();
//     var hora= time.getHours();
//     var minuto= time.getMinutes();
//     var segundo= time.getSeconds();
//     quadro.innerHTML= `${hora}:${minuto}:${segundo}`
// }
// window.setInterval(watch, 1000);