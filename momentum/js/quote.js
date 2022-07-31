const quoteClass = document.querySelector('.quote');
const authorClass = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let quoteUrl = `https://favqs.com/api/qotd`


const quoteError = () => {
    quoteUrl = `./assets/data.${getLocale()}.json`
    setQuote()
}

const parseQuote = async () => {
    try {
        const response = await fetch(quoteUrl)
        return await response.json()
    } catch (err) {
        quoteError()
        quoteUrl = `https://favqs.com/api/qotd`
        return null
    }
}

const translateToRussian = async (quote,author) =>{
        try {
            const response = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=133d4d30-f7fa-fcc6-e1a0-308f5d28a913:fx&text=${quote}&text=${author}&target_lang=RU`)
            return await response.json()
        } catch (err) {
            quoteError()
            quoteUrl = `https://favqs.com/api/qotd`
            return null
        }
}

const setQuote = () => {
    let parse = parseQuote();
    if (parse) {
        parse.then(data => {
            if(!data) return
            let random = Math.floor(Math.random() * 2)
            if(getLocale()==='ru'){
               translateToRussian(data.quote.body,data.quote.author).then(transQuote => {
                   if(transQuote) {
                       quoteClass.textContent = transQuote.translations[0]['text']
                       authorClass.textContent = transQuote.translations[1]['text']
                   } else {
                       quoteClass.textContent = data[random]?.quote||data.quote.body
                       authorClass.textContent = data[random]?.author||data.quote.author
                   }
               })
            } else {
                quoteClass.textContent = data[random]?.quote||data.quote.body
                authorClass.textContent = data[random]?.author||data.quote.author
            }
        })
    }
}

changeQuote.addEventListener('click',()=>{
    setQuote()
})

setQuote()
