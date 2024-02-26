console.log("Welcome to Mix message") // welcome message

// Random show word
const randomWord = ["Think carefully" , "How are you today?" , "All job are done!"];

random = () => { 
    return randomWord[Math.floor(Math.random()*3)]
}

console.log(random())
