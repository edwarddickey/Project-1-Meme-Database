# Project-1-Meme-Database
Project pitch:
This project will be focusing on a social network for memes. The memes will be displayed on the screen stacked on top of each other (like instagram). Features will include a favoriting system that will act as a way to save memes. Another feature is you can toggle between your favorites memes and toggle back to all of them. The 3rd feature will include a light and dark mode so viewing memes can occur at all hours of the day.
The API data will be pulled from <https://api.imgflip.com/get_memes>. This API contains lots of memes. This will act as a storage for your favorite meme templates so you can save them and edit text to them later. Challenges we will face is when toggling to and from favorited memes, all unfavorited memes will have to be removed from the page. This will require an ‘IF’ or turnery statements to check the status of the favorite button. The three event listeners will come from: light/dark mode toggle, favorite/all meme toggle, and the favorite button itself. Our array iteration should come into play with a ‘forEach’ method to populate the page with the array of meme objects.