function search() {
  let searchContent = document.getElementById('search-input').value;
  let url = "https://www.google.com/search?q=" + decodeURIComponent(searchContent);
  window.open(url, "_self");
}

document.getElementById('search-button').addEventListener('click', search, false);

document.getElementById('search-input').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    search();
  }
})
