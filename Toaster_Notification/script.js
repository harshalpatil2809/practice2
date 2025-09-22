function createToaster(config){
    return function toaster(str){
        let div = document.createElement("div")
        div.textContent = str
        div.classList.add("child")

        document.querySelector(".parent").appendChild(div);

        setTimeout(() => {
            document.querySelector(".parent").innerHTML = ""
        }, config.duration * 1000);
    }
}

let toaster = createToaster({
    duration : 3,
});

toaster("Download Compeleted")
setTimeout(() =>{
    toaster("Harshal accepted your request")
},2000);