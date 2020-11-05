let bookmarks = document.querySelectorAll('i.fa-bookmark');
let myWorkshopCards = document.querySelectorAll('.my_workshop_card');
let removeCards = document.querySelectorAll('.remove_card');
let removeMyPhotos = document.querySelectorAll('.remove_my_photo');
let myPhotos = document.querySelectorAll('.my_photo');
let myProductPhotos = document.querySelectorAll('.my_product_photos img');
const comments = document.querySelectorAll('.comments_group');
const commentsBox = document.querySelectorAll('.comments_group');

// Modal product photos
myPhotos.forEach((myPhoto) => {
  myPhoto.addEventListener("mouseover", () => {
   console.dir(myPhoto.children[1].style.display = "block")
  })
});

myPhotos.forEach((myPhoto) => {
  myPhoto.addEventListener("mouseout", () => {
   console.dir(myPhoto.children[1].style.display = "none")
  })
});

removeMyPhotos.forEach((removeMyPhoto) => {
  removeMyPhoto.addEventListener('click', () => {
    removeMyPhoto.parentElement.style.display = "none"
  })
});
// ***************************************************************

// Workshop Cards photo
myWorkshopCards.forEach((myWorkshopCard) => {
   myWorkshopCard.addEventListener("mouseover", () => {
    myWorkshopCard.childNodes[1].children[2].style.display = "block"
   })
});

myWorkshopCards.forEach((myWorkshopCard) => {
  myWorkshopCard.addEventListener("mouseout", () => {
    myWorkshopCard.childNodes[1].children[2].style.display = "none"
  })
});

removeCards.forEach((removeCard) => {
  removeCard.addEventListener('click', () => {
    parentElement.parentElement.style.display = 'none'
  })
});
// ************************************************************

// Workshop home codes
bookmarks.forEach((bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('far');
    bookmark.classList.toggle('fas')
    if(bookmark.classList.contains('fas')) {
      bookmark.classList.add('click_animation');

      setTimeout(function() {
        bookmark.classList.remove('click_animation');
      }, 500)
    }
  })
}));
// *******************************************************

// My product photos

myProductPhotos.forEach((myProductPhoto) => {
  myProductPhoto.addEventListener('click', () => {
    let photoHome = document.getElementById('photoHome');
    photoHome.src = myProductPhoto.src
  })
});
// **********************************************


// Comment 

comments.forEach((comment) => {
  comment.addEventListener('mouseover', () => {
  comment.children[2].classList.add('reply_hide');
  comment.children[1].children[1].classList.add('comment_bgc')
  })
});

comments.forEach((comment) => {
  comment.addEventListener('mouseout', () => {
    comment.children[2].classList.remove('reply_hide');
    comment.children[1].children[1].classList.remove('comment_bgc')
  })
});


function auto_grow(element) {
  element.style.height = '5px';
  element.style.height = (element.scrollHeight) + 'px';

}

