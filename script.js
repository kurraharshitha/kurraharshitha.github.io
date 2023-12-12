let stack = [];

function renderStack() {
  const stackItems = document.getElementById('stackItems');
  stackItems.innerHTML = stack.map(item => `<div>${item}</div>`).join('');
}

function addItem() {
  const stackInput = document.getElementById('stackInput');
  const newItem = stackInput.value;
  if (newItem.trim() !== '') {
    stack.push(newItem);
    renderStack();
    stackInput.value = '';
  }
}

function removeItem() {
  if (stack.length > 0) {
    stack.pop();
    renderStack();
  } else {
    alert('Stack is empty!');
  }
}

renderStack();