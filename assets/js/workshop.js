window.addEventListener('load', function() {
	let selected = false; // change the value to false for viewing in unauthorized mode

	const select = () => {
		if(selected){
      document.querySelector('.header_buttons .btn_my_shop').style.display = "block";
      document.querySelector('.header_buttons .btn_create_store').style.display = "none";
      document.querySelector('.removed_card').style.display = "none";
		}else{
			document.querySelector('.header_buttons .btn_my_shop').style.display = "none";
			document.querySelector('.header_buttons .btn_create_store').style.display = "block";
			document.querySelector('.myCardShop').style.display = "none";
		}
  }
  select()
});


let bookmarks = document.querySelectorAll('i.fa-bookmark');
let myProductPhotos = document.querySelectorAll('.my_product_photos img');
let addMyAvatarInput = document.querySelector('.add_my_avatar_input');
let addUserAvatarInput = document.querySelector('.add_user_avatar_input');
let avatarEditHome = document.querySelectorAll('.avatar_edit_home');
let workshopCards = document.querySelectorAll('.workshop_card');

workshopCards.forEach((workshopCard) => {
  workshopCard.addEventListener('mouseover', () => {
    workshopCard.children[1].children[3].classList.add('button_hover_card')
  })
});

workshopCards.forEach((workshopCard) => {
  workshopCard.addEventListener('mouseout', () => {
    workshopCard.children[1].children[3].classList.remove('button_hover_card')
  })
});






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

addUserAvatarInput.addEventListener('change', (e) => {
  if(e.target.files.length > 0) {
    let src = URL.createObjectURL(e.target.files[0]);
    let userAvatar = e.target.parentElement.children[2];
    userAvatar.src = src;
    userAvatar.style.display = 'block'
  }
});

addMyAvatarInput.addEventListener('change', (e) => {
  if(e.target.files.length > 0) {
    let src = URL.createObjectURL(e.target.files[0]);
    let myAvatar = document.querySelector('.myAvatarImg');
    myAvatar.src = src;
    myAvatar.style.display = 'block'
  }
});





