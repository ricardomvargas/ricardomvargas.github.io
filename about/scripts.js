var currentPosition = 0;
var modal = document.getElementById('image-gallery');
var previewDescription = document.getElementById('img-preview-description');
var img = document.createElement('img');
img.className = 'opened-img';
var images = [
  {
    url: '../assets/images/memorable-moments/first-guinness-min.png',
    content:
      'My second day in Dublin and my first Guinness beer. The beginning of a life changing experience.',
  },
  {
    url: '../assets/images/memorable-moments/iceland-min.png',
    content:
      'In Iceland I walked over a frozen lake, entered in a volcano, saw black sand beach and had a bath in a hot spring. Iceland is amazing!',
  },
  {
    url: '../assets/images/memorable-moments/the-wicklow-way-min.png',
    content:
      'The Wicklow Way is a 127 km trail that crosses the county Wicklow to Dublin. To finish I had to walk for 6 days overcoming pain and exhaustion.',
  },
  {
    url: '../assets/images/memorable-moments/barbara-min.png',
    content: 'The first time I saw my baby girl, be a father is a bless!',
  },
  {
    url: '../assets/images/memorable-moments/family-min.png',
    content: 'Every moment with my family is memorable!',
  },
];

function openImgPreview(index) {
  console.log('openImgPreview');
  currentPosition = index;
  modal.classList.add('open');
  img.src = images[index].url;
  document.getElementById('img-container').appendChild(img);
  previewDescription.innerHTML = images[index].content;
}

function closeImgPreview() {
  modal.classList.remove('open');
}

function nexImage(e) {
  e.preventDefault();
  if (currentPosition === 4) currentPosition = 0;
  else if (currentPosition < 4) currentPosition += 1;
  openImgPreview(currentPosition);
}

function previousImage(e) {
  e.preventDefault;
  if (currentPosition === 0) currentPosition = 4;
  else if (currentPosition > 0) currentPosition -= 1;
  openImgPreview(currentPosition);
}

document.getElementById('btn-next').addEventListener('click', nexImage, false);
document
  .getElementById('btn-previous')
  .addEventListener('click', previousImage, false);
