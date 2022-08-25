document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

let memeFeed = document.getElementById("meme-list")
let favorites = []
let favBtn = document.getElementById("fav-btn")
let allBtn = document.getElementById("all-btn")
let toggleButton = document.getElementById("mode-btn")
let toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
let toggleText = document.querySelector("mode-label")



fetch("https://api.imgflip.com/get_memes")
.then(response => response.json())
.then(memeInfo =>{
    populatePage(memeInfo);
})


    
function populatePage(memeInfo){
    for (let i = 0; i < memeInfo.data.memes.length; i++) {
        //console.log(memeInfo.data.memes[i]);
        let navItem = document.createElement('h5')
        let img = document.createElement('img')
        let btn = document.createElement("button");
        btn.innerHTML = "Favorite";
        btn.addEventListener('click',(e)=>{
            btn.innerText = "Favorited"
            alert("Meme added to favorites");
            favorites.push(memeInfo.data.memes[i])
        })
     

        img.src = memeInfo.data.memes[i].url
        navItem.appendChild(img)
        memeFeed.appendChild(navItem)
        navItem.appendChild(btn)

    }
}
function favBtnAct(){
    document.getElementById("meme-list").innerHTML = "";
    for (let i = 0; i < favorites.length; i++) {
        let navItem = document.createElement('h5')
        let img = document.createElement('img')
        let btn = document.createElement("button");
        btn.innerHTML = "Favorite";
        btn.addEventListener('click',(e)=>{
            toggle(btn);
            //btn.innerText = "Unfavorite"
            //favorites.push(memeInfo.data.memes[i])
        })
     

        img.src = favorites[i].url
        navItem.appendChild(img)
        memeFeed.appendChild(navItem)
        navItem.appendChild(btn)

    }

}
favBtn.addEventListener('click',(e)=>{
    favBtnAct();
})
console.log(favorites)
function allBtnAct(){
    document.getElementById("meme-list").innerHTML = ""
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(memeInfo =>{
        populatePage(memeInfo);
    })

}
allBtn.addEventListener('click',(e)=>{
    allBtnAct();
})
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);