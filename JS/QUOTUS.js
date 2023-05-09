let theme = ['age','alone','amazing' ,'anger','architecture','art','attitude','beauty','best','birthday','business','car','change','communications','computers','cool','courage','dad','dating','death','design','dreams','education','environmental','equality','experience','failure','faith','family','famous','fear','fitness','food','forgiveness','freedom','friendship','funny','future','god','good','government','graduation','great','happiness','health','history','home','hope','humor','imagination','inspirational','intelligence','jealousy','knowledge','leadership','learning','legal','life','love','marriage','medical','men','mom','money','morning','movies','success']
const KEY = '7y40ojUmEjAQKt1Zf09nHA==AsWfq5TBrq4zDTyy'
let button = document.querySelector('.button')
let request = new XMLHttpRequest();

button.addEventListener('click', function (){
    request.open('GET','https://api.api-ninjas.com/v1/quotes?category=' + theme[1])
    console.log(request);
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://api.api-ninjas.com/v1/quotes?category=' + theme[1],
    //     headers: { 'X-Api-Key': KEY},
    //     contentType: 'application/json',
    //     success: function(result) {
    //         console.log(result);
    //     },
    //     error: function ajaxError(jqXHR) {
    //         console.error('Error: ', jqXHR.responseText);
    //     }
    // });
})