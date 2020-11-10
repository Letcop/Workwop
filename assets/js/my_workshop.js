
let removeCards = document.querySelectorAll('.remove_card');
let myWorkshopCards = document.querySelectorAll('.my_workshop_card');
let myStoreName = document.querySelector('.my_store_name');
let myStoreTextString = document.querySelector('.my_store_text_string'); 
let imgAvatarEdits = document.querySelectorAll('.avatar-edit input');
let addProductImgs = document.querySelectorAll('.add_product_img');
let closeAddedProducts = document.querySelectorAll('.close_added_product');


addProductImgs.forEach((addProductImg) => {
  addProductImg.addEventListener('mouseover', () => {
    addProductImg.parentElement.children[3].style.display = 'flex'
  })
});

addProductImgs.forEach((addProductImg) => {
  addProductImg.addEventListener('mouseout', () => {
    addProductImg.parentElement.children[3].style.display = 'none'
  })
});

closeAddedProducts.forEach((closeAddedProduct) => {
  closeAddedProduct.addEventListener('click', () => {
    closeAddedProduct.previousElementSibling.style.display = 'none'
    closeAddedProduct.style.display = 'none'
  })
})
closeAddedProducts.forEach((closeAddedProduct) => {
  closeAddedProduct.addEventListener('mouseover', () => {
    closeAddedProduct.style.display = 'flex'
  })
});


// Workshop Cards photo
myWorkshopCards.forEach((myWorkshopCard) => {
  myWorkshopCard.addEventListener("mouseover", () => {
   myWorkshopCard.childNodes[1].children[2].style.display = "block";
   myWorkshopCard.children[1].children[3].children[0].classList.add('button_hover_card');
  })
});

myWorkshopCards.forEach((myWorkshopCard) => {
 myWorkshopCard.addEventListener("mouseout", () => {
   myWorkshopCard.childNodes[1].children[2].style.display = "none";
   myWorkshopCard.children[1].children[3].children[0].classList.remove('button_hover_card');

 })
});

removeCards.forEach((removeCard) => {
 removeCard.addEventListener('click', () => {
   removeCard.parentElement.parentElement.style.display = 'none'
 })
});
// ************************************************************



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