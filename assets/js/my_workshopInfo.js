
let productEvaluation = document.querySelector('.product_evaluation'); 
let descriptionItem = document.querySelector('.description_item');
let productPrice = document.querySelector('.product_price');
let myPhotos = document.querySelectorAll('.my_photo');
let removeMyPhotos = document.querySelectorAll('.remove_my_photo');
const comments = document.querySelectorAll('.text_comments');


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
