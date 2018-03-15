function goToWebsite() {
  var inputElement = document.getElementById('urlInput');

  var url = inputElement.value;
  window.open(url, '_blank');
}