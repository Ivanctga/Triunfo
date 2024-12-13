// async e await

async function getCoinData(){
    try {
        const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates?id=3124234234&name=P');
        const json = await data.json();
        console.log(json);
    } catch(error) {
        console.log(error);
        
    }  
   
}

getCoinData();

