import getElements from './getElements.js';
const {
  base
} = getElements;
import {getRandomId} from './utils.js';
export const createRow = function(item) {
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
                  <button class="table__btn table__btn_pic" data-pic="https://f.vividscreen.info/soft/1572e2cb9b3a4f63f2f1eea36059d370/Bad-Goisern-Hallstattersee-800x600.jpg"></button>
                  <button class="table__btn table__btn_edit"></button>
                  <button class="table__btn table__btn_del"></button>
                </td>`;
  return trElement;
}

export const addGoodPage = (list, item) => {
  list.append(createRow(item));
};
export const addGoodData = (item) => {
  item.id = Number(getRandomId());
  base.push(item);
  console.log(base);
};

export default {
  createRow,
  addGoodPage,
  addGoodData,
}
