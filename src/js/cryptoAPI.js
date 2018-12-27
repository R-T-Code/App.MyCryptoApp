// import {loader} from './ui';


// Creating a new class for API call 
export class CryptoAPI {
    
    //__api for all cryptos, returns - [id, name, symbol, website_slug]
    async queryAPI(){
        // Query the url
        const url = await fetch('https://api.coinmarketcap.com/v2/listings/');
            
        // Return the info as json
        const cryptoInfo = await url.json()

       
 
        // LOADERIS VEIKIA BET PRIES TAI PASIRODO HEADER DALIS. REIKIA SUTVARKYT
        const loader = document.querySelector('main');
        loader.style.display = 'none';


        //Return info from the api as an object
        return {
            cryptoInfo
        }

        
    }

    //__Query the rest api for each cryptocurrency
    async getCryptoData(id){
        const url = await fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/`);

        const cryptoData = await url.json();
        
        return{
            cryptoData
        }
    }

    //__Query global data for the total market cap
    async getGlobalData(){
        const url = await fetch('https://api.coinmarketcap.com/v2/global/');

        const globalData = await url.json();

        return{
            globalData
        }
    }

    //_Url for logo
    getLogo(id){
        const url = `https://s2.coinmarketcap.com/static/img/coins/128x128/${id}.png`;

        return url;
    }
}