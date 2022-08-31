import getElements from './getElements.js';
const {
  modalForm,
  descriptionId,
  overlayElement,
  btnAdd,
  list,
  modalCheckbox,
  discountCount,
  crmTotalPrice,
  modalTotalPrice,
  inputPrice,
  inputCount,
  base,
  file,
} = getElements;
import {getRandomId} from './utils.js';
import {createRow, addGoodPage, addGoodData} from './createElements.js';
const openModal = () => {
    overlayElement.classList.add('active');
    descriptionId.textContent = getRandomId();
  };
const closeModal = () => {
    overlayElement.classList.remove('active');
    modalForm.reset();
  };
const modalControl = () => {
  btnAdd.addEventListener('click', openModal);
  overlayElement.addEventListener('click', (e) => {
    const target = e.target;
  if (target === overlayElement || target.closest('.modal__close')) {
    closeModal();
  }
  })
};
let newCrmTotalPrice;
list.addEventListener('click', e => {
      const target = e.target;
      if (target.closest('.table__btn_del')) {
        let parent = target.closest('tr');
        parent.remove();
        let elem = parent.querySelector('.table__cell_name');
        base.forEach((item, i) => {
        if (item.id === Number(elem.dataset.id)) {
          newCrmTotalPrice = totalPrice -= item.count * item.price;
          crmTotalPrice.textContent = `$ ${newCrmTotalPrice}`;
          let index = base.indexOf(item);
          base.splice(index, 1);
        }
      })
      console.log(base)
      };
    });
    const calcModalTotalPrice = () => {
      inputPrice.addEventListener('blur', (e) => {
      const target = e.target;
      if (isNaN(inputCount.value)) {
        alert('Количество может быть только числом');
      }
      if (isNaN(inputPrice.value)) {
      alert('Цена может быть только числом');
      };
        modalTotalPrice.textContent = `$ ${inputPrice.value * inputCount.value}`;
    })
    };
    let totalPrice = 0;
const renderGoods = function(obj) {
  obj.forEach((item) => {
    totalPrice += (item.count * item.price);
      const newElem = createRow(item);
      list.append(newElem);
      base.push(item);
      return newElem;
  });
  crmTotalPrice.textContent = `$ ${totalPrice}`;
}
  const formControl = () => {
  modalForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGood = Object.fromEntries(formData);
    addGoodData(newGood);
    addGoodPage(list, newGood);
    newCrmTotalPrice = totalPrice += inputPrice.value * inputCount.value;
    crmTotalPrice.textContent = `$ ${newCrmTotalPrice}`;
    modalForm.reset();
    closeModal();
  })
};

modalCheckbox.addEventListener('click', () => {
  if (modalCheckbox.checked) {
    discountCount.disabled = false;
  } else {
    discountCount.disabled = true;
    discountCount.value = "";
  }
});
document.addEventListener('click', (e) => {
  const target = e.target;
  let attr = target.getAttribute('data-pic');
  if (target.closest('.table__btn_pic')) {
    open(attr, 'popup','width = 800, height = 600').moveTo(screen.width/2 - 400  , screen.height/2 - 300);
  }
})

export default {
  openModal,
  closeModal,
  modalControl,
  calcModalTotalPrice,
  formControl,
  renderGoods,
}
