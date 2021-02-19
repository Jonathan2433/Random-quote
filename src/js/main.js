const pic = document.getElementById('pic');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const getPic = () => {
    fetch("https://picsum.photos/2000/1000")
    .then((res) => {
        pic.innerHTML = `<img src=${res.url} alt="img-picsum">`;
    });
};
const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = `"${data.content}"<span id="author">${data.author}</span>
        ` ;
    });  
}; 
getPic();
getQuote();
quote.addEventListener('click', () => {
    getPic();
    getQuote();
});

