const the = document.querySelectorAll('p')

the.forEach(function (p) {
   if (p.textContent.includes('the')) {
       p.remove()
   }
    
})