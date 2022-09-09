import { readByTxt } from "./util.js"

/**
 * 
 * @param {string} stringOfQuotes 
 * @return {Array<Object>} quotes
 */
function quoteParser(stringOfQuotes) {
    const quotesSplited = stringOfQuotes.split("\n");
    const quotes = quotesSplited.map( quote => {
        const quoteInfoArr = quote.split("-").map(elem => elem.trim());
        const quoteInfo = {
            quote: quoteInfoArr[0],
            author: quoteInfoArr[1]
        }
        return quoteInfo;
    });
    return quotes;
}

const allQuotes = readByTxt("../data/quotes.txt");
const quotes = quoteParser(allQuotes);

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const numOfQuotes = quotes.length;
const randomIdx = Math.floor(Math.random()*numOfQuotes);
const todaysQuote = quotes[randomIdx];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


