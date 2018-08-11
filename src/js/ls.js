import {CryptoAPI} from './cryptoAPI.js';
import * as UI from './ui.js';

// use class for api calls
let cryptoAPI = new CryptoAPI();

// Add id to local storage id array
export function addToLS (id){
    let idArr = getFromLS();
    // If the crypto id is already in the array it won't be added again
        if(idArr.length === 0){
            idArr.push({
                id: id,
                amount: 0
            });
        } else {
            const match = idArr.some(matchFunction);
            function matchFunction(crypto){
                return crypto.id === id;
            }
            if(match === false){
                idArr.push({
                    id: id,
                    amount: 0
                });
            }
// The local storage part works, adds cryptos if a new one and doesnt if it exsists. Change the UI so it wouldnt add crypto if it exists
        }

    localStorage.setItem('idArr', JSON.stringify(idArr));
}

// Get id array from local storage
export function getFromLS(){
    let idArr;

    const idLS = localStorage.getItem('idArr');
    if(idLS === null){
        idArr = [];
    } else {
        idArr = JSON.parse(idLS);
    }
    return idArr;
}

// Delete from local storage
export function deleteFromLS(id){
    //Get the id array form ls
    const idArr = getFromLS();

    for(let i=0; i < idArr.length; i++){
        // DEVELOP DEVELOP DEVELOP
        if(idArr[i].id === id){
            idArr.splice(idArr.indexOf(idArr[i]),1);
        }
     }
  
    // update the id arr in local storage
    localStorage.setItem('idArr', JSON.stringify(idArr));
}

// on document load cryptos from local storage and create a crypto div element for each
export function loadCryptoFromLS(){
    let idArr = getFromLS();
    
    idArr.forEach(crypto => {
        const id = crypto.id;
        cryptoAPI.getCryptoData(id)
                    .then(data => {  
                        const cryptoData = data.cryptoData.data;
                        const cryptoName = cryptoData.name;
                        const cryptoPrice = cryptoData.quotes.USD.price;
                        const cryptoChange = cryptoData.quotes.USD.percent_change_24h;
                        const cryptoAmount = crypto.amount;
                        UI.buildCryptoElement(cryptoName, cryptoPrice, cryptoChange, id, cryptoAmount);
                        
                    })
                    .catch(err => {
                        console.log(err);
                    });
    })
}

// Update local storage when submited the owned amount
export function updateLS (id, amount){
    let idArr = getFromLS();

    for(let i=0; i < idArr.length; i++){
       if(idArr[i].id === id){
            idArr[i].id = id,
            idArr[i].amount = amount
       }
    }

    localStorage.setItem('idArr', JSON.stringify(idArr));
}



