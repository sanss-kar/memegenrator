const generateMemebtn = document.querySelector(".meme .generate-meme-button");
const memeImage = document.querySelector(".meme img");
const memeTitle = document.querySelector(".meme .meme-title");
const memeAuthor = document.querySelector(".meme .mere-authr");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}
 
const generatememe = () => {
    fetch(" https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author)
    });
};
 
generateMemebtn.addEventListener("click", generatememe);

