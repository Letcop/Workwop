let userWorkshopCards = document.querySelectorAll('.user_workshop_card');
let productEvaluation = document.querySelector('.product_evaluation');
const comments = document.querySelectorAll('.text_comments');
console.log(productEvaluation)

userWorkshopCards.forEach((userWorkshopCard) => {
  userWorkshopCard.addEventListener('mouseover', () => {
    console.dir(userWorkshopCard.children[1].children[3].children[0].classList.add('button_hover_card'))
  })
});


userWorkshopCards.forEach((userWorkshopCard) => {
  userWorkshopCard.addEventListener('mouseout', () => {
    console.dir(userWorkshopCard.children[1].children[3].children[0].classList.remove('button_hover_card'))
  })
});


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


  comments.forEach((comment) => {
    comment.addEventListener('mouseover', () => {
      comment.children[0].classList.add('comment_bgc')
    comment.children[1].classList.add('reply_hide');
    })
  });
  
  comments.forEach((comment) => {
    comment.addEventListener('mouseout', () => {
     comment.children[0].classList.remove('comment_bgc')
    comment.children[1].classList.remove('reply_hide');
    })
  });
  
  
  function auto_grow(element) {
    element.style.height = '5px';
    element.style.height = (element.scrollHeight) + 'px';
  
  }
