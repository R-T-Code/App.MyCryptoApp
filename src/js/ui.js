import {CryptoAPI} from './cryptoAPI.js';
import * as LS from './ls.js';
// use class for api calls
let cryptoAPI = new CryptoAPI();

//_DOM variables
export const addCrypto = document.querySelector('.add-crypto'),
             addCryptoInput = document.querySelector('.add-crypto__input'),
             addCryptoOutput = document.querySelector('.add-crypto__output'),
             addCryptoBtn = document.querySelector('.add-crypto__btn'),
             cryptoImg = document.querySelector('.crypto__img'),
             cryptoName = document.querySelector('.crypto__name'),
             cryptoPrice = document.querySelector('.crypto__price'),
             cryptoDayChange = document.querySelector('.crypto__day-change'),
             container = document.querySelector('.crypto-container'),
             deleteBtn = document.querySelector('.delete-btn'),
             marketCap = document.querySelector('.market-cap__cap'),
             showMoneyBtn = document.querySelector('.my-portfolio__btn'),
             showMoney = document.querySelector('.my-portfolio__amount');

export let ownAmount = document.querySelector('.own-amount');

//_Crypto element template
export function buildCryptoElement (name, price, change, id, amount){
    const cryptoDiv = document.createElement('div');
    cryptoDiv.classList = "crypto-container__crypto";

    // border color according to the day change value
    if(change < 0){
        cryptoDiv.classList.add('negative');
    } else {
        cryptoDiv.classList.add('positive');
    }

    // the content of a crypto div element
    const cryptoDivContent = `
            <div class="crypto-container__logo">
                <img class="crypto-container__img" src="${cryptoAPI.getLogo(id)}" alt="">
            </div>
            <p class="crypto-container__name">${name}</p>
            <div class="crypto-container__price-container">
                <p>$&nbsp;</p>
                <p class="crypto-container__price">${price.toFixed(2)}</p>
            </div>
            <p class="crypto-container__day-change">${change} %</p>
            <input type="number" class="crypto-container__own-amount" value="${amount === undefined ? 0 : amount}">
            <input type="submit" class="crypto-container__own-btn btn" value="update amount" title="Update amount">
            <div class="crypto-container__delete-btn btn" title="Delete crypto currency">X</div>
    `;
    cryptoDiv.innerHTML = cryptoDivContent;


    // Own Amount input reset on click
    const ownInputArr = document.querySelectorAll('.crypto-container__own-amount');
    ownInputArr.forEach(ownInput => {
        ownInput.addEventListener('click', () => {
            ownInput.value = '';
        })
    });
    
    // MAKE ALL BUTTONS SHOW EFFECT ON TOUCH EVENT!!!
  

    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!
    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!
    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!
    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!
    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!
    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!
    // button to delete a crypto from porftolio
    cryptoDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('crypto-container__delete-btn')){
            // remove from DOM
            const targetParent = e.target.parentElement;
            targetParent.remove();
            // remove from local storage
            const targetID = id
            LS.deleteFromLS(targetID);
        };


        // button event to update the amount you own of a crypto
        if(e.target.classList.contains('crypto-container__own-btn')){
            e.preventDefault();
            // read the own input value
            ownAmount = e.target.previousElementSibling.value;

            LS.updateLS(id, ownAmount);
            // LS.addCryptoLS(id, ownAmount);
        }
    });
   
    // Add crypto div element to the cointainer in DOM
    container.appendChild(cryptoDiv);
}

//_Display error with passed in message
export function displayError(msg){
    const textEl = document.createElement('p');
    // CREATE THE CSS FOR THIS CLASS TO BE RED AND INLINE WITH OTHER ELEMENTS;
    textEl.classList.add('msg-error');
    textEl.textContent = msg;
    addCrypto.appendChild(textEl);
    setTimeout(() => {
        textEl.textContent = '';
    }, 2000);
}

//_Clear input field
export function clearInput(){
    addCryptoInput.value = '';
}
// Clear search field (type ahead) div container
export function clearAddCryptoOutput (){
    addCryptoOutput.innerHTML = '';
}

//_Display the market cap amount in words
export function displayIll(arr){
    if(arr.length <= 9){
        return '(mil)';
    } else if (arr.length <= 12 || arr.length > 9){
        return '(bil)';
    } else {
        return '(tril)';
    }
}


// INPUT TYPE AHEAD (understand this and make sure its in right place!)
const cryptoArr = [];

cryptoAPI.queryAPI()
    .then(data => {
        const dataArr = data.cryptoInfo.data;
        cryptoArr.push(...dataArr)
    });

function matchInput (wordToMatch, cryptoArr){
    return cryptoArr.filter(crypto => {
        const regex = new RegExp(wordToMatch, 'gi');
        return crypto.name.match(regex) || crypto.website_slug.match(regex)
    })
}

// addCryptoInput.addEventListener('change', displayMatch);
addCryptoInput.addEventListener('keyup', displayMatch);

function displayMatch(){
    const matchArray = matchInput(this.value, cryptoArr);
    const html = matchArray.map(crypto => {
        return `
            <li class="add-crypto__input-match">${crypto.name} (${crypto.website_slug})</li>`
        }).join('');
        addCryptoOutput.innerHTML = html;
   
        let liArray = Array.from(document.querySelectorAll('.add-crypto__input-match'));
        liArray.forEach(li => {
            li.addEventListener('click', (e) => {
                const liWebsiteSlug =  e.target.textContent.split('(')[1];
                const liToInputEntry = liWebsiteSlug.substring(0, liWebsiteSlug.length - 1);
                const liElement = document.querySelector('.add-crypto__input-match');
                addCryptoInput.value = liToInputEntry;
                clearAddCryptoOutput();
            })  
        })

        if(addCryptoInput.value === ""){
            clearAddCryptoOutput();
        }   
}








// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //
// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //
// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //
// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //
// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //
// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //
//_Display day and date
export function showDate () {
    const date = new Date();
    // Day returned as 0-6.
    const weekDay = date.getDay();
    if(weekDay === 0){
        return 'Sunday'
    } else if (weekDay === 1){
        return 'Monday'
    } else if (weekDay === 2){
        return 'Tuesday'
    } else if (weekDay === 3){
        return 'Wednesday'
    } else if (weekDay === 4){
        return 'Thursday'
    } else if (weekDay === 5){
        return 'Friday'
    } else if (weekDay === 6){
        return 'Saturday'
    } 
    
    // Year
    const year = date.getFullYear();
    // Month
    const month = date.getMonth();
    // Day
    const day = date.getDate();
    console.log(day);
}
showDate();