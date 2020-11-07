let bookmarks = document.querySelectorAll('i.fa-bookmark');
let myWorkshopCards = document.querySelectorAll('.my_workshop_card');
let removeCards = document.querySelectorAll('.remove_card');
let removeMyPhotos = document.querySelectorAll('.remove_my_photo');
let myPhotos = document.querySelectorAll('.my_photo');
let myProductPhotos = document.querySelectorAll('.my_product_photos img');
const comments = document.querySelectorAll('.text_comments');
const commentsBox = document.querySelectorAll('.comments_group');
let myStoreTextString = document.querySelector('.my_store_text_string');
let myStoreName = document.querySelector('.my_store_name');  
let addMyAvatarInput = document.querySelector('.add_my_avatar_input');
let imgAvatarEdits = document.querySelectorAll('.avatar-edit input');
let descriptionItem = document.querySelector('.description_item');
let productPrice = document.querySelector('.product_price');
let avatarEditHome = document.querySelectorAll('.avatar_edit_home')



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
    removeCard.parentElement.parentElement.style.display = 'none'
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
    console.dir(comment.children[0].classList.add('comment_bgc'))
  comment.children[1].classList.add('reply_hide');
  })
});

comments.forEach((comment) => {
  comment.addEventListener('mouseout', () => {
    console.dir(comment.children[0].classList.remove('comment_bgc'))
  comment.children[1].classList.remove('reply_hide');
  })
});


function auto_grow(element) {
  element.style.height = '5px';
  element.style.height = (element.scrollHeight) + 'px';

}
// function bbb() {
//   descriptionItem.value = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ea, obcaecati tempora repudiandae dicta aspernatur quod ex illum consectetur officia fuga ducimus ipsam eum corporis consequuntur odit fugiat? Dolores, eligendi?'
//   productPrice.value = '25'
// }
// bbb();

// Модал редактировать товар
avatarEditHome.forEach((imgAvatarEdit) => {
  imgAvatarEdit.addEventListener('change', (e) => {

    console.dir(e.target.parentElement.children[2])
    if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let blockAvatar = e.target.parentElement.children[2];
        blockAvatar.src = src;
        blockAvatar.style.display = 'block'
    }
  });
});

addMyAvatarInput.addEventListener('change', (e) => {
  if(e.target.files.length > 0) {
    let src = URL.createObjectURL(e.target.files[0]);
    let myAvatar = document.querySelector('.myAvatarImg');
    myAvatar.src = src;
    myAvatar.style.display = 'block'
  }
});

imgAvatarEdits.forEach((imgAvatarEdit) => {
  imgAvatarEdit.addEventListener('change', (e) => {

    console.dir(e.target.parentElement.children[2])
    if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let blockAvatar = e.target.parentElement.children[2];
        blockAvatar.src = src;
        blockAvatar.style.display = 'block'
    }
  });
});



function aaa() {
  myStoreName.value = 'borbo-shop'
  myStoreTextString.value = 'Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Там мир пояс одна решила наш. Составитель лучше но знаках заглавных строчка моей текстами она своего, правилами заманивший курсивных щеке заголовок маленький, языкового скатился имеет назад? Коварный, это. Силуэт, запятых выйти всеми заманивший все единственное прямо, безорфографичный продолжил рыбными, вопроса свой что реторический сбить! Рукопись семантика, которой, они, вопроса эта строчка буквенных взобравшись не безопасную буквоград языкового заглавных инициал но грустный. Предложения строчка рукопись пунктуация переписывается послушавшись наш одна переписали!'

  
}

aaa();



