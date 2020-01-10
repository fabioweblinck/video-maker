const readline = require('readline-sync')
const robots = {
  text: require('./robots/text.js')
}

async function start() {
  const content = {}
  
  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()
  content.lang = askAndReturnLanguage()

  await robots.text(content)

  function askAndReturnSearchTerm() {
  return readline.question('Type a Wikipedia searchterm: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'choose one option: ')
   
  }
    function askAndReturnLanguage() {
      const  language = ['pt', 'en']
      const selectedLangIndex = readline.keyInSelect(language,'Choose Language: ')
      const selectedLangText = language[selectedLangIndex]
      
      return selectedLangText

    } 
    

 console.log(content)
}

start()