// Dom document object model

// const p = document.querySelector('p')
// p.remove()

//Query All and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = "*Censored*"
    // console.log(p.textContent)
    // p.remove()
})