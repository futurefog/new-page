function search() {
  let searchContent = document.getElementById('search-input').value;
  let url = 'https://www.google.com/search?q=' + decodeURIComponent(searchContent);
  openUrl(url);
}

function openUrl(url) {
  window.open(url, '_self');
}

document.getElementById('search-button').addEventListener('click', () => {
  search();
}, false);


document.getElementById('search-input').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    search();
  }
})

document.getElementById('like-button').addEventListener('click', () => {
  openUrl('https://github.com/futurefog/new-page');
}, false);
