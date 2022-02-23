const the = document.querySelectorAll('p')

the.forEach(function (p) {
   if (p.textContent.includes('the')) {
       p.remove()
   }
    
})

// ANdrews solution

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraph) {
   if (paragraph.textContent.includes('the')) {
       paragraph.remove()
   }
    
})