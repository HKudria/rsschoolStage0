const quoteClass = document.querySelector('.quote');
const authorClass = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let quoteUrl = `https://favqs.com/api/qotd`


const quoteError = () => {
    quoteUrl = './assets/data.json'
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

const setQuote = () => {
    let parse = parseQuote();
    if (parse) {
        parse.then(data => {
            if(!data) return
            console.log(data.quote)
            let random = Math.floor(Math.random() * 2)
            quoteClass.textContent = data[random]?.quote||data.quote.body
            authorClass.textContent = data[random]?.author||data.quote.author
        })
    }
}

changeQuote.addEventListener('click',()=>{
    setQuote()
})

setQuote()
