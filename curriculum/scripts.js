var pVisible1 = false;
var pVisible2 = false;
var pVisible3 = false;
var pVisible4 = false;
var pVisible5 = false;
var pVisible6 = false;
var imgExpandId = 'mobile-img-expand-';
var imgCloseId = 'mobile-img-close-';
var pContetId = 'mobile-job-description-';

function showOrHideContent(sectionNumber, showContent) {
  var content = document.getElementById(pContetId + sectionNumber);
  var imgExpand = document.getElementById(imgExpandId + sectionNumber);
  var imgClose = document.getElementById(imgCloseId + sectionNumber);

  if (showContent) {
    content.classList.remove('closed');
    content.classList.add('expanded');
    imgExpand.className = 'closed';
    imgClose.className = 'expanded';
  } else {
    content.classList.remove('expanded');
    content.classList.add('closed');
    imgExpand.className = 'expanded';
    imgClose.className = 'closed';
  }
}

function handleImgExpandClick(sectionNumber) {
  var showContent;
  switch (sectionNumber) {
    case 1:
      showContent = pVisible1 = !pVisible1;
      break;
    case 2:
      showContent = pVisible2 = !pVisible2;
      break;
    case 3:
      showContent = pVisible3 = !pVisible3;
      break;
    case 4:
      showContent = pVisible4 = !pVisible4;
      break;
    case 5:
      showContent = pVisible5 = !pVisible5;
      break;
    case 6:
      showContent = pVisible6 = !pVisible6;
      break;
  }

  showOrHideContent(sectionNumber, showContent);
}
