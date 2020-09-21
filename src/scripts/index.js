import cuid from 'cuid';
import shoppingList from './shopping-list.js';
import $ from 'jquery';
import '../styles/index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
