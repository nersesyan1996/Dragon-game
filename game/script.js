
const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
      let z=1;

function jump() {
     if(dino.classList != 'jump'){  
            dino.classList.add('jump')

           setTimeout(function () {
  
          dino.classList.remove('jump')
     },300)}
 
}

document.addEventListener('keydown',function (event) {
     jump();
      
     
})

let isAlive = setInterval(function() {
     let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
     // 87.8623px

     let cactusleft=parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
     console.log(cactusleft);
     if(cactusleft<35 && cactusleft>0 && dinoTop>80){
          alert('game over')
       
     }
        setInterval(() => {
                 z+=5
          document.querySelector('.score').textContent = z+'Km'
          }, 500);
},50);