// import css files for webpack
import '../scss/index.scss';

// import js modules
import {CryptoAPI} from './cryptoAPI.js';
import * as UI from './ui.js';
import * as LS from './ls.js';


// use class for api calls
let cryptoAPI = new CryptoAPI();



// Add a new currency button
UI.addCryptoBtn.addEventListener('click', () => {
    // read the crypto name from input
    let newCrypto =  UI.addCryptoInput.value;
    // api for all cryptos, returns - [id, name, symbol, website_slug]
    cryptoAPI.queryAPI()
    .then(data => {
        // path to all crypto array
        const allCryptoInfoArr = data.cryptoInfo.data;
       
        // match the newCrypto input to the all crypto array and get the ID
        allCryptoInfoArr.forEach(crypto => {
            // console log a currency info if cant guess the website slug
            // if(crypto.symbol === 'BTCP'){
            //     console.log(crypto);
            // }
            if(crypto.website_slug === newCrypto){
                const newCryptoID = crypto.id;

                // using the id from first call for second api call to get full data on a single crypto
                cryptoAPI.getCryptoData(newCryptoID)
                    .then(data => {
                        // Prevents same crypto to be created
                        const idArr = LS.getFromLS();
                        const match = idArr.some(matchFunction);
                        function matchFunction(crypto){
                            return crypto.id === newCryptoID;
                        }
                        if(match === false){
                            const cryptoData = data.cryptoData.data;
                            const cryptoName = cryptoData.name;
                            const cryptoPrice = cryptoData.quotes.USD.price;
                            const cryptoChange = cryptoData.quotes.USD.percent_change_24h;   
                            const cryptoAmount = crypto.amount;                         
                            UI.buildCryptoElement(cryptoName, cryptoPrice, cryptoChange, newCryptoID, cryptoAmount);
                            
                            // Add crypto id to local storage idArr
                            LS.addToLS(newCryptoID);
                        } else {
                            UI.displayError('Currency already exists')
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        });
    })
    .catch(err => {
        console.log(err);
    })
    UI.clearInput();
    UI.clearAddCryptoOutput();
});

// On page load display cryptos that are in local storage
document.addEventListener('DOMContentLoaded', LS.loadCryptoFromLS);


// Total market cap info
cryptoAPI.getGlobalData()
    .then(data => {
        const marketCapPath = data.globalData.data.quotes.USD.total_market_cap;
        const capArr = marketCapPath.toString().split('');
        const formatedMarketCap = marketCapPath.toLocaleString();
        UI.marketCap.innerHTML = `$ ${formatedMarketCap} ${UI.displayIll(capArr)}` ;
    });

// calculate and show total portfolio
UI.showMoneyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let portValue = 0;
    const cryptoArr = document.querySelectorAll('.crypto-container__crypto');
    cryptoArr.forEach(crypto => {
        const ownAmount = crypto.querySelector('.crypto-container__own-amount').value;
        const currPrice = crypto.querySelector('.crypto-container__price').textContent;
        const ownValue = ownAmount * currPrice;
        portValue += ownValue;
    });

    UI.showMoney.innerHTML = `$ ${portValue.toFixed(2)}`;    
})