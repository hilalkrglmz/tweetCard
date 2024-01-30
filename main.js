const editableInput = document.querySelector(".editable")
const readonlyInput = document.querySelector(".readonly")
const placeholder = document.querySelector(".placeholder")
const counter = document.querySelector(".counter")
const tweetBtn =  document.querySelector(".btn")


/* Tweet-box a tıklanıldığında placeholder rengini değiştir. */
editableInput.addEventListener("focus", () => {
    placeholder.style.color="#d5e9fc"
})
editableInput.addEventListener("blur", () => {
    placeholder.style.color="#98A5B1"
})

/* yazı yazıldığında placeholder yazısını kaldır, silince yeniden çıkar */

editableInput.onkeypress = (e) => {
    
    validateTweet(e.target)

}
editableInput.onkeyup = (e) => {
    
    validateTweet(e.target)

}




const validateTweet = (e) => {
    let text;
    let tweetLimit = 3;
    let tweetLength = e.innerText.length;
   
    if(tweetLength<=0){
        counter.style.display="none";
        placeholder.style.display="block"
        tweetBtn.classList.remove("active")

    }else{
        counter.style.display="block"
        placeholder.style.display="none"
        tweetBtn.classList.add("active")
    }

    counter.innerText= tweetLimit-tweetLength;

    if(tweetLength>tweetLimit){
        let overText= e.innerText.substr(tweetLimit,tweetLength)
        overText= `<span class='overSpan'>${overText}</span>`
        
        text= e.innerText.substr(0,tweetLimit) + overText 

        readonlyInput.style.zIndex="1"
        tweetBtn.classList.remove("active")
        counter.style.color="darkred"

    }else{
        counter.style.color="black"
    }
    readonlyInput.innerHTML=text
}