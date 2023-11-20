const generateMemeBtn = document.querySelector(
	'.meme-genrator .meme-generate-btn'
);
const memeImage = document.querySelector(
	'.meme-generator img'
);
const memeAuthor = document.querySelector(
	'.meme-generator .meme-author'
);
const memeTitle = document.querySelector(
	'.meme-generator .meme-author'
);
const updateDetails = (url, title, author) => {
	memeImage.setAttribute('src', url);
	memeAuthor.innerHTML = author;
	memeTitle.innerHTML = title;
};

const generateMeme = () => {
	fetch(' https://meme-api.com/gimme/wholesomememes').then(
		(res) =>
			response.json().then((data) => {
				updateDetails(data.url, data.title, data.author);
			})
	);
};

generateMemeBtn.addEventListener('click', generateMeme);
