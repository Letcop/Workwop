
let productEvaluation = document.querySelector('.product_evaluation'); 
let descriptionItem = document.querySelector('.description_item');
let productPrice = document.querySelector('.product_price');
let myPhotos = document.querySelectorAll('.my_photo');
let removeMyPhotos = document.querySelectorAll('.remove_my_photo');
const comments = document.querySelectorAll('.text_comments');
let myProductPhotos = document.querySelectorAll('.my_product_photos img');
let editProductImgs = document.querySelectorAll('.edit_product_img');
let closeEditProducts = document.querySelectorAll('.close_edit_product');
let avatarImgs = document.querySelectorAll('.avatar_img');


// Удалить добавленной картинки
editProductImgs.forEach((editProductImg) => {
  editProductImg.addEventListener('mouseover', () => {
    editProductImg.parentElement.children[3].style.display = 'flex'
  })
});

editProductImgs.forEach((editProductImg) => {
  editProductImg.addEventListener('mouseout', () => {
    editProductImg.parentElement.children[3].style.display = 'none'
  })
});

closeEditProducts.forEach((closeEditProduct) => {
  closeEditProduct.addEventListener('click', () => {
    closeEditProduct.parentElement.children[2].style.display = 'none'
    closeAddedProduct.style.display = 'none'
  })
});
closeEditProducts.forEach((closeEditProduct) => {
  closeEditProduct.addEventListener('mouseover', () => {
    console.log(closeEditProduct.style.display = 'flex')
  })
});
// *********************************************************

// Добавить место удаленной картинки
avatarImgs.forEach((avatarImg) => {
  avatarImg.addEventListener('change', (e) => {
    e.target.parentElement.children[2]
    if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let addAvatar = e.target.parentElement.children[2];
      addAvatar.src = src;
      addAvatar.style.display = 'block'
    }
  });
});
// ***********************************************

productEvaluation.addEventListener('click', () => {
  productEvaluation.classList.toggle('far');
  productEvaluation.classList.toggle('fas')
  if(productEvaluation.classList.contains('fas')) {
    productEvaluation.classList.add('product_evaluation_hover');

    setTimeout(function() {
      productEvaluation.classList.remove('product_evaluation_hover');
    }, 500)
  }
});

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


function bbb() {
  descriptionItem.value = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ea, obcaecati tempora repudiandae dicta aspernatur quod ex illum consectetur officia fuga ducimus ipsam eum corporis consequuntur odit fugiat? Dolores, eligendi?'
  productPrice.value = '25'
}
bbb();
