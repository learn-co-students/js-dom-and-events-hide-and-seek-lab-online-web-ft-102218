function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let items = document.getElementById('grand-node').querySelectorAll('div');
  return items[items.length - 1];
}

function increaseRankBy(n) {
  let items = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < items.length; i++) {
    let sum = parseInt(items[i].textContent) + n;
    items[i].textContent = sum;
  }
}
