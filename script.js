function openPage(pageId) {
  var pageOneElement = document.getElementById('pageOne');
  var pageTwoElement = document.getElementById('pageTwo');

  if(pageId === 'pageOne') {
    /* add hidden class to pageTwo and remove hidden class
        from page one */

    pageTwoElement.classList.add('hidden');
    pageOneElement.classList.remove('hidden');
  }
  else if(pageId === 'pageTwo') {
    pageOneElement.classList.add('hidden');
    pageTwoElement.classList.remove('hidden');
  }
}