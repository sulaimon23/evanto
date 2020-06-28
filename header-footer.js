
mod = document.getElementById('mod')

document.getElementById('ham').addEventListener('click', e => {
 toggle = true;
 if(toggle){
  mod.style.display = 'block'
 }
 if(toggle != toggle){
  mod.style.display = 'none'
 }
})