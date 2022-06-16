'use strict'
const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const modalCheck = document.querySelector('.vendor-code__btn');
const descriptionId = document.querySelector('.vendor-code__id');
const overlayElement = document.querySelector('.overlay');
overlayElement.classList.remove('active');
const base = [];
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
const goods = [
  {
    "id": 1,
    "name": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 2,
    "name": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 3,
    "name": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 4,
    "name": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
]
// modalForm.name.required = true;
// modalForm.category.required = true;
// modalForm.description.required = true;
// modalForm.units.required = true;
// modalForm.discount.required = true;
// modalForm.discount_count.required = true;
// modalForm.count.required = true;
// modalForm.price.required = true;
// modalForm.total.required = true;

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
const getRandomId = () => {
  let id = "";
  for (let i = 1; i < 8; i++) {
    id += getRandomNum(0, 9);
  }
  return id;
}
const createRow = function(item) {
  const trElement = document.createElement('tr');
  const tr = document.getElementsByTagName('tr');
	let trCount = tr.length;
  trElement.innerHTML = `<td class="table__cell">${trCount}</td>
                <td class="table__cell table__cell_left table__cell_name" data-id=${item.id}>
                  <span class="table__cell-id">id: ${item.id}</span>${item.name}</td>
                <td class="table__cell table__cell_left">${item.category}</td>
                <td class="table__cell">${item.units}</td>
                <td class="table__cell">${item.count}</td>
                <td class="table__cell">${item.price}</td>
                <td class="table__cell">${item.count * item.price}</td>
                <td class="table__cell table__cell_btn-wrapper">
                  <button class="table__btn table__btn_pic"></button>
                  <button class="table__btn table__btn_edit"></button>
                  <button class="table__btn table__btn_del"></button>
                </td>`;
  return trElement;
}
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
renderGoods(goods);

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
modalControl();
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
        modalTotalPrice.textContent = `$ ${inputPrice.value * inputCount.value}`;
    })
    };
    calcModalTotalPrice();
const formControl = () => {
  modalForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.get('name'));
    const newGood = Object.fromEntries(formData);
    addGoodData(newGood);
    addGoodPage(list, newGood);
    newCrmTotalPrice = totalPrice += inputPrice.value * inputCount.value;
    console.log(newCrmTotalPrice)
    crmTotalPrice.textContent = `$ ${newCrmTotalPrice}`;
    modalForm.reset();
    closeModal();
  })
};
formControl();

const addGoodData = (item) => {
  item.id = Number(getRandomId());
  base.push(item);
  console.log(base);
};
const addGoodPage = (list, item) => {
  list.append(createRow(item));
  // const newGood = createRow(item);
  //     list.append(newGood);
};
modalCheckbox.addEventListener('click', () => {
  if (modalCheckbox.checked) {
    discountCount.disabled = false;
  } else {
    discountCount.disabled = true;
    discountCount.value = "";
  }
});


