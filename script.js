const apiKey_voice = "1f44c827c9794ceeb4f5d708fe7c6cd4";

var myInit = {
    method:"GET",
    headers:{
        'Content-type':"application/json"
    },
    mode: 'cors',
    cache: 'default'
};

let myRequest = new Request("./news.json");

let khabare = document.getElementById("khabare");
fetch(myRequest)
.then(function(resp){
    return resp.json();
})
.then(function(data){
// console.log(data);
for(i = 0 ;i< 10;i++){
    // console.log(data.list[i])
    news = ` <div class="card hvr-hang border-secondary mb-3" style="max-width: 18rem;">
    <div class="card-body text-secondary">
      <p class="card-text">${data.list[i]}</p>
    </div>
  </div>
</div>`
khabare.innerHTML += news;
}

});

let btn = document.getElementById("btn");
let span = document.getElementById("span")
function readAll(){
    btn.classList = "fa fa-spinner fa-spin"
    span.innerText = "Please wait"
    console.log("in the function")
    for(i=0;i<1;i++){
    VoiceRSS.speech({
        key: "1f44c827c9794ceeb4f5d708fe7c6cd4",
        src: khabare.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
}
