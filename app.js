const countries = {
    "en": "Inglês",
    "pt": "Português",
}

const body=document.querySelector('body')
const frase='teste'
const idiomaFrase='pt'
const idiomaTraduzir='en'

async function traduzirFrase(){
    const url=`https://api.mymemory.translated.net/get?q=${frase}&langpair=${idiomaFrase}|${idiomaTraduzir}`
    const response=await fetch(url)
    const obj=await response.json()
    //console.log(obj)
    const fraseTraduzida=obj.responseData.translatedText
    //console.log(fraseTraduzida)
    return fraseTraduzida
}

async function loadFrase(){
    const fraseHTML=document.createElement('p')
    fraseHTML.textContent=traduzirFrase
    body.appendChild(fraseHTML)
}

console.log(traduzirFrase())