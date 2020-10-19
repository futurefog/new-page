function search() {
  let searchContent = document.getElementById('search-input').value;
  let url = "https://www.google.com/search?q=" + decodeURIComponent(searchContent);
  window.open(url)
}

document.getElementById('search-button').addEventListener('click', search, false)
