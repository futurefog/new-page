document.getElementById('search-button').addEventListener('click', () => {
  let searchContent = document.getElementById('search-input').value;
  let url = 'https://www.google.com/search?q=' + decodeURIComponent(searchContent);
  window.open(url, '_self');
}, false);

document.getElementById('search-input').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    let searchContent = document.getElementById('search-input').value;
    let url = 'https://www.google.com/search?q=' + decodeURIComponent(searchContent);
    window.open(url, '_self');
  }
})

document.getElementById('like-button').addEventListener('click', () => {
  window.open('https://github.com/futurefog/new-page', '_self')
}, false);
