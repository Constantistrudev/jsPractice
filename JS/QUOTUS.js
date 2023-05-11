function sendRequest(method,url){
    const headers ={ 'X-Api-Key': KEY}
   return fetch(url,{
    method: method,
    headers: headers,
    contentType: 'application/json',
   }).then( response =>{
    if(response.ok)
    {
        return response.json()
    }
   else
   {
    return response.json().then(err =>
        {
        const error  =new Error('ERRR')
        error.data = err
        throw error
        })
    }})
}

let theme = ['age','alone','amazing' ,'anger','architecture','art','attitude','beauty','best','birthday','business','car','change','communications','computers','cool','courage','dad','dating','death','design','dreams','education','environmental','equality','experience','failure','faith','family','famous','fear','fitness','food','forgiveness','freedom','friendship','funny','future','god','good','government','graduation','great','happiness','health','history','home','hope','humor','imagination','inspirational','intelligence','jealousy','knowledge','leadership','learning','legal','life','love','marriage','medical','men','mom','money','morning','movies','success'];
const KEY = '7y40ojUmEjAQKt1Zf09nHA==AsWfq5TBrq4zDTyy';
const url = 'https://api.api-ninjas.com/v1/quotes?category=';
let button = document.querySelector('.button');
const quote = document.querySelector('.quote-text');
const author = document.querySelector('.author');
let quoteList = document.querySelector('.quote-list');

button.addEventListener('click', function (){
    sendRequest('GET',url+ theme[Math.floor(Math.random() * theme.length)])
    .then(data => { quote.innerText = data[0].quote; author.innerText = data[0].author; quoteList.innerHTML+= `<li>${data[0].quote} <em>Author: ${data[0].author}</em></li>`})
})
