window.addEventListener('keydown', function(e){
  console.log(e.type)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
  if(!audio) return;  
  
  audio.currentTime = 0; //rewind to start if pressed when audio already playing
  audio.play();   
});


window.addEventListener('click', function(e){
  console.log(e.type)
  const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`); 
  if(!audio) return;  
  
  audio.currentTime = 0; //rewind to start if pressed when audio already playing
  audio.play();   
});
