let memeFeed = document.getElementById("meme-list")
let navItem = document.createElement('h5')
//let i = 0
let addingButton = document.querySelectorAll('h5')
let allButtons = document.querySelectorAll('button')
let toggleButton = document.getElementById("mode-btn")
let toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
let toggleText = document.querySelector("mode-label")
fetch("https://api.imgflip.com/get_memes")
.then(response => response.json())
.then(memeInfo =>{
    populatePage(memeInfo);
})

// function scroller(memeInfo ,i){
//     navItem.src = memeInfo.data.memes[0].url
//         memeFeed.append(navItem)

function populatePage(memeInfo){
    for (let i = 0; i < memeInfo.data.memes.length; i++) {
        console.log(memeInfo.data.memes[i]);
        let img = document.createElement('img')
        img.src = memeInfo.data.memes[i].url
        navItem.appendChild(img)
        memeFeed.append(navItem)

    }
}

// toggleButton.addEventListener('click', function changeButtonColor(){
//     allButtons.forEach (); {
//         style.background = 'black'}
//     allButtons.style.color = "#FFFF00"
// });

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);