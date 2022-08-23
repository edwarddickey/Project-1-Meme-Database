let memeFeed = document.getElementById("meme-list")
let navItem = document.createElement('h5')
let i = 0
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