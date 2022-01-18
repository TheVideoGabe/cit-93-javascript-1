//global
    // local (name)
        // local (name)
    // local

//let name = 'Andrew'

if (true) {
   // let name = 'Mike'
   
    if (true) {
        //leaked gloal (no'let)
        let name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}