const CharacterAmountRange= document.getElementById('CharacterAmountRange')
const CharacterAmountNumber= document.getElementById('CharacterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const includeUppercaseElement = document.getElementById('IncludeUppercase')
const includeNumbersElement = document.getElementById('IncludeNumbers')
const includeSymbolsElement = document.getElementById('IncludeSymbols')
const passwordDisplay = document.getElementById('password-display')

const Uppercase_Char_Codes = arrayLowToHigh(65, 90)
const Lowercase_Char_Codes = arrayLowToHigh(97, 122)
const Number_Char_Codes = arrayLowToHigh(48, 57)
const Symbol_Char_Codes = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64)
).concat(arrayLowToHigh(91, 96)
).concat(arrayLowToHigh(123, 126))





CharacterAmountNumber.addEventListener('input', syncCharacterAmount)
CharacterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e=>{
  e.preventDefault()
  const characterAmount= CharacterAmountNumber.value
  const includeNumbers= includeNumbersElement.checked
  const includeUppercase= includeUppercaseElement.checked
  const includeSymbols= includeSymbolsElement.checked

  const password = generatepassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function generatepassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = Lowercase_Char_Codes
  if(includeUppercase){
    charCodes=charCodes.concat(Uppercase_Char_Codes)
  }
  if(includeNumbers){
    charCodes=charCodes.concat(Number_Char_Codes)
  }
  if(includeSymbols){
    charCodes=charCodes.concat(Symbol_Char_Codes)
  }

  const passwordCharacters = []
  for(let i=0; i<characterAmount; i++){
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
    //console.log(charCodes);
  }

  return passwordCharacters.join('')
}

function arrayLowToHigh(low, high) {
  const arr = []
  for( let i=low; i<=high; i++){
    arr.push(i)
  }
  return arr;
}

function syncCharacterAmount(e){
  const value = e.target.value
  CharacterAmountNumber.value= value
  CharacterAmountRange.value = value
}
