var header = document.querySelectorAll('.background')[0]
var content = document.querySelectorAll('.content')[0]
var nav = document.querySelectorAll('.nav')[0]

var test = function(){
   //requestAnimationFrame(test)
   var amount = document.body.scrollTop/3
   header.style.transform = 'translateY(-'+amount+'px)'
   if(content.getBoundingClientRect().top < 80){
      nav.classList.add('background')
   } else{
      nav.classList.remove('background')
   }
}
//test();
window.addEventListener('scroll', function(){test()})