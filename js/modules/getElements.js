const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const modalCheck = document.querySelector('.vendor-code__btn');
const descriptionId = document.querySelector('.vendor-code__id');
const overlayElement = document.querySelector('.overlay');
overlayElement.classList.remove('active');
const btnAdd = document.querySelector('.panel__add-goods');
const btnClose = document.querySelector('.modal__close');
const btnDel = document.querySelector('.table__btn_del');
const list = document.querySelector('.table__body');
const modalCheckbox = document.querySelector('input[name = "discount"]');
const discountCount = document.querySelector('input[name = "discount_count"]');
let crmTotalPrice = document.querySelector('.crm__total-price');
let modalTotalPrice = document.querySelector('.modal__total-price');
const inputPrice = document.querySelector('input[name = "price"]');
const inputCount = document.querySelector('input[name = "count"]');
const base = [];

modalForm.name.required = true;
modalForm.category.required = true;
modalForm.description.required = true;
modalForm.units.required = true;
modalForm.discount.required = true;
modalForm.discount_count.required = true;
modalForm.count.required = true;
modalForm.price.required = true;
modalForm.total.required = true;

export default {
  modalTitle,
  modalForm,
  modalCheck,
  descriptionId,
  overlayElement,
  btnAdd,
  btnClose,
  btnDel,
  list,
  modalCheckbox,
  discountCount,
  crmTotalPrice,
  modalTotalPrice,
  inputPrice,
  inputCount,
  base,
}
