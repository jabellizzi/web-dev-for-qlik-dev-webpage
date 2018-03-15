function activatePage(pageId) {
  console.log(pageId);
  var pageOneElement = document.getElementById('pageOne');
  var pageTwoElement = document.getElementById('pageTwo');

  if(pageId === 'pageOne') {
    pageTwoElement.style.display = 'none';
    pageOneElement.style.display = 'block';
  } else if(pageId === 'pageTwo') {
    pageOneElement.style.display = 'none';
    pageTwoElement.style.display = 'block';
  }
}