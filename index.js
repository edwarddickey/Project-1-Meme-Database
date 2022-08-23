document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

let memeFeed = document.getElementById("meme-list")


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
        let navItem = document.createElement('h5')
        let img = document.createElement('img')
        let btn = document.createElement("button");
        btn.innerHTML = "Favorite";
      // document.querySelector('#likeBtn').innerText='Favorite';

        img.src = memeInfo.data.memes[i].url
        navItem.appendChild(img)
        memeFeed.appendChild(navItem)
        navItem.appendChild(btn)

    }
}
function favBtn(){
    
}